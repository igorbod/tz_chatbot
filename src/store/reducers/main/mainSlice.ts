import { SLICES_NAMES } from "@/constants/store";
import {createSlice} from "@reduxjs/toolkit";

interface IMainState {
  isAppLoading: boolean;
}

const initialState: IMainState = {
  isAppLoading: false,
}

const slicePrefix = SLICES_NAMES.MAIN

export const mainSlice = createSlice({
  name: slicePrefix,
  initialState,
  reducers: {

  }
})

export const {

} = mainSlice.actions;

export default mainSlice.reducer;