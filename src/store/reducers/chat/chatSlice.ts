import { SLICES_NAMES } from "@/constants/store";
import { IChatMessage } from "@/types/IChatMessage";
import {createSlice} from "@reduxjs/toolkit";

interface IChatState {
  messages: IChatMessage[];
}

const initialState: IChatState = {
  messages: [],
}

const slicePrefix = SLICES_NAMES.CHAT

export const mainSlice = createSlice({
  name: slicePrefix,
  initialState,
  reducers: {

  }
})

export const {

} = mainSlice.actions;

export default mainSlice.reducer;