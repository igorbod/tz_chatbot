import {RootState} from "../../store";

export const chatMessages = (state: RootState) => state.chatReducer.messages
export const chatIsLoading = (state: RootState) => state.chatReducer.isLoading
export const chatLoadingMessage = (state: RootState) => state.chatReducer.loadingMessage