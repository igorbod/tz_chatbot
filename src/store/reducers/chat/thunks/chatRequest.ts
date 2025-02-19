import {SLICES_NAMES} from "@/constants/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "@/constants/api";
import {$api} from "@/api/api";
import {DELAYS} from "@/constants/main";
import {CUID} from "@/constants/localStorage";
import {
  setIsComposeAvailable,
  addNewMessage,
} from "../chatSlice";
import { RootState } from "@/store/store";
import {BOT_DEFAULT_AVATAR} from "@/constants/mock";

const slicePrefix = SLICES_NAMES.CHAT

interface IChatRequestParams {
  text: string;
  cuid: string;
  context?: {},
  messageID: number;
}

export const requestChat = createAsyncThunk(
  slicePrefix + '/requestChat',
  (_args: IChatRequestParams, thunkAPI) => {
    const url = API_ROUTES.REQUEST.route
    const dispatch = thunkAPI.dispatch;
    const state = (thunkAPI.getState() as RootState).chatReducer

    dispatch(setIsComposeAvailable(false))

    return setTimeout(async () => {
      await $api
        .post(`${url}`, _args)
        .then((response) => {
          if (response.status === 200 && response?.data?.result) {
            localStorage.setItem(CUID, response?.data?.result?.cuid)

            dispatch(addNewMessage({
              id: window.crypto.randomUUID(),
              time: _args.messageID,
              username: state.inf.name,
              message: response?.data?.result?.text?.value,
              isOwner: false,
              userAvatar: BOT_DEFAULT_AVATAR,
            }))

          }
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          dispatch(setIsComposeAvailable(true))
        })
    }, DELAYS.DEFAULT)
  }
)