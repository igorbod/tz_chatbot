import {SLICES_NAMES} from "@/constants/store";
import {IChatMessage} from "@/types/IChatMessage";
import {createSlice} from "@reduxjs/toolkit";
import {CHAT_TITLES} from "../../../modules/ChatBot/constants";

interface IChatState {
  messages: IChatMessage[];
  isLoading: boolean;
  loadingMessage: string;
  isComposeAvailable: boolean;
}

const initialState: IChatState = {
  messages: [],
  isLoading: true,
  loadingMessage: CHAT_TITLES.INIT,
  isComposeAvailable: false,
}

const slicePrefix = SLICES_NAMES.CHAT

export const mainSlice = createSlice({
  name: slicePrefix,
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLoadingMessage: (state, action) => {
      state.loadingMessage = action.payload;
    },
    setIsComposeAvailable: (state, action) => {
      state.isComposeAvailable = action.payload;
    }
  },
})

export const {
  setMessages,
  setIsLoading,
  setLoadingMessage,
  setIsComposeAvailable,
} = mainSlice.actions;

export default mainSlice.reducer;