import { createSlice } from "@reduxjs/toolkit";

import type { Location } from "../../types"

interface MapState {
  currentPos: Location
  centerPos: Location
}

const INITIAL_LOCATION: Location = {'lat': 33.4995687, 'lng': 126.5311287}

const initialState: MapState = {
  currentPos: INITIAL_LOCATION,
  centerPos: INITIAL_LOCATION
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {

  }
});

// export const { } = mapSlice.actions;

export default mapSlice.reducer;