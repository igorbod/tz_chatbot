import {RootState} from "../../store";

export const chatMessages = (state: RootState) => state.chatReducer.messages
export const chatIsLoading = (state: RootState) => state.chatReducer.isLoading
export const chatLoadingMessage = (state: RootState) => state.chatReducer.loadingMessage
export const isComposeAvailable = (state: RootState) => state.chatReducer.isComposeAvailable
export const botInfo = (state: RootState) => state.chatReducer.inf
export const chatIsInitialized = (state: RootState) => state.chatReducer.isChatInitialized