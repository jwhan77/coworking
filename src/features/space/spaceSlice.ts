import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import haversine from 'haversine-distance';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from "../../store";
import type { Space, PlaceType, Location } from '../../types';

const url = '/.netlify/functions/getData';

function updateDistanceInData(data: Space[], loc1: Location) {
  return data.map(loc => {
    loc.distance = calculateDistance(loc1, loc.loc);
    return loc
  }).sort((a, b) => a.distance! - b.distance!)
}

function calculateDistance(loc1: Location, loc2: Location) {
  return +(haversine(loc1, loc2) * 0.001).toFixed(1)
}

interface SpaceState {
  spaceItems: Space[]
  spaceType: PlaceType
  selectedSpace: (Space | null)
  isLoading: boolean
}

const initialState: SpaceState = {
  spaceItems: [],
  spaceType: {coworking: true, cafe: true},
  selectedSpace: null,
  isLoading: true
};

export const getSpaceItems = createAsyncThunk<
  Space[],
  any,
  {
    dispatch: AppDispatch,
    state: RootState
  }
>(
  'space/getSpaceItems',
  async (id: number, thunkAPI) => {
    try {
      const res = await axios(url);
      const data = res.data as Space[]
      const { currentPos } = thunkAPI.getState().map;
      const updatedState = updateDistanceInData(data, currentPos);
      return updatedState
    } catch (err) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)

const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getSpaceItems.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(getSpaceItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.spaceItems = action.payload;
    })
    builder.addCase(getSpaceItems.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
    })
  }
});

// export const { } = spaceSlice.actions;

export default spaceSlice.reducer;