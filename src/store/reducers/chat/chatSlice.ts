import {SLICES_NAMES} from "@/constants/store";
import {IChatMessage} from "@/types/IChatMessage";
import {createSlice} from "@reduxjs/toolkit";
import {CHAT_TITLES} from "@/modules/ChatBot/constants";
import {IBotInf} from "@/types/IBotInf";
import {CUID, MESSAGES} from "@/constants/localStorage";
import {initChat} from "./thunks/chatInit";
import {eventChat} from "./thunks/chatEvent";
import {requestChat} from "./thunks/chatRequest";
import {BOT_DEFAULT_AVATAR} from "@/constants/mock";

interface IChatState {
  messages: IChatMessage[];
  isLoading: boolean;
  loadingMessage: string;
  isComposeAvailable: boolean;
  inf: IBotInf,
  isChatInitialized: boolean;
}

const initialState: IChatState = {
  messages: [],
  isLoading: true,
  loadingMessage: CHAT_TITLES.INIT,
  isComposeAvailable: false,
  inf: {
    name: 'Bot',
  },
  isChatInitialized: false,
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
    addNewMessage: (state, action: { payload: IChatMessage }) => {
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
    setBotInfo: (state, action: { payload: string }) => {
      state.inf = {
        name: `Bot ${action?.payload ?? ''}`,
      };
    },
    saveMessagesToLocalStorage: state => {
      localStorage.setItem(MESSAGES, JSON.stringify(state.messages));
    },
    clearMessages: state => {
      state.messages = [];
      localStorage.removeItem(MESSAGES);
    },
  },
  extraReducers: (builder) => {
    builder

      /* INIT CHAT */
      .addCase(initChat.pending, (state) => {
        state.isLoading = true
        state.isComposeAvailable = false
        state.isChatInitialized = false
      })
      .addCase(initChat.fulfilled, (state, action) => {
        const result = action.payload?.result
        const localMessages = localStorage.getItem(MESSAGES)

        if (result) {
          localStorage.setItem(CUID, result?.cuid)
          state.inf.name = `Bot ${result?.inf.name}`

          if (localMessages) {
            state.messages = JSON.parse(localMessages ?? '')
          }

          state.isChatInitialized = true
        }

        state.isLoading = false
        state.isComposeAvailable = true
      })
      .addCase(initChat.rejected, (state, action) => {
        console.log('initChat.rejected - ', action)
        state.isLoading = false
        state.isComposeAvailable = true
        state.isChatInitialized = false
      })

      /* EVENT CHAT */
      .addCase(eventChat.pending, (state) => {
        state.isComposeAvailable = false
      })
      .addCase(eventChat.fulfilled, (state, action) => {
        const result = action.payload?.result

        if (result) {
          localStorage.setItem(CUID, result?.cuid)
          state.messages.push({
            id: result?.id ?? window.crypto.randomUUID(),
            time: new Date().getTime(),
            username: state.inf.name,
            message: result?.text?.value,
            isOwner: false,
            userAvatar: BOT_DEFAULT_AVATAR,
          })

          localStorage.setItem(MESSAGES, JSON.stringify(state.messages));
        }
        state.isComposeAvailable = true
      })
      .addCase(eventChat.rejected, state => {
        state.isComposeAvailable = true
      })

    /* REQUEST CHAT */
      .addCase(requestChat.pending, (state) => {
        state.isComposeAvailable = false
      })
      .addCase(requestChat.fulfilled, (state, action) => {
        const result = action.payload?.result

        if (result) {
          localStorage.setItem(CUID, result?.cuid)
          state.messages.push({
            id: result?.id ?? window.crypto.randomUUID(),
            time: new Date().getTime(),
            username: state.inf.name,
            message: result?.text?.value,
            isOwner: false,
            userAvatar: BOT_DEFAULT_AVATAR,
          })

          localStorage.setItem(MESSAGES, JSON.stringify(state.messages));
        }
        state.isComposeAvailable = true
      })
      .addCase(requestChat.rejected, (state, action) => {
        console.log('initChat.rejected - ', action)
        state.isComposeAvailable = true
      })
  },
})

export const {
  setIsLoading,
  setLoadingMessage,
  setIsComposeAvailable,
  addNewMessage,
  setBotInfo,
  saveMessagesToLocalStorage,
  clearMessages,
} = mainSlice.actions;

export default mainSlice.reducer;