import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./reducers/main/mainSlice"
import chatReducer from "./reducers/chat/chatSlice"

export const store = configureStore({
  reducer: {
    mainReducer,
    chatReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;