import { configureStore } from "@reduxjs/toolkit";
import spaceReducer from "./features/space/spaceSlice";
import mapReducer from "./features/map/mapSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    map: mapReducer,
    modal: modalReducer,
    space: spaceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch