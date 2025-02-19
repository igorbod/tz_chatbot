import {SLICES_NAMES} from "@/constants/store";
import {IChatMessage} from "@/types/IChatMessage";
import {createSlice} from "@reduxjs/toolkit";
import {CHAT_TITLES} from "../../../modules/ChatBot/constants";
import {IBotInf} from "../../../types/IBotInf";

interface IChatState {
  messages: IChatMessage[];
  isLoading: boolean;
  loadingMessage: string;
  isComposeAvailable: boolean;
  inf: IBotInf,
}

const initialState: IChatState = {
  messages: [],
  isLoading: true,
  loadingMessage: CHAT_TITLES.INIT,
  isComposeAvailable: false,
  inf: {
    name: 'Bot',
  }
}

const slicePrefix = SLICES_NAMES.CHAT

export const mainSlice = createSlice({
  name: slicePrefix,
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLoadingMessage: (state, action) => {
      state.loadingMessage = action.payload;
    },
    setIsComposeAvailable: (state, action) => {
      state.isComposeAvailable = action.payload;
    },
    addNewMessage: (state, action: {payload: IChatMessage}) => {
      if (action?.payload) {
        const {
          id,
          time,
          message,
          isOwner,
          username,
          userAvatar,
        } = action.payload;

        state.messages.push({
          id,
          time,
          message,
          isOwner,
          username: username ?? '',
          userAvatar: userAvatar ?? '',
        });
      }
    },
    setBotInfo: (state, action: {payload: string}) => {
      state.inf = {
        name: `Bot ${action?.payload ?? ''}`,
      };
    }
  },
})

export const {
  setIsLoading,
  setLoadingMessage,
  setIsComposeAvailable,
  addNewMessage,
  setBotInfo,
} = mainSlice.actions;

export default mainSlice.reducer;