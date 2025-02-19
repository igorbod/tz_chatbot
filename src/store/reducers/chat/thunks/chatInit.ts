import {SLICES_NAMES} from "@/constants/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "@/constants/api";
import {$api} from "@/api/api";
import {DELAYS} from "@/constants/main";
import {CUID} from "@/constants/localStorage";
import {
  setIsComposeAvailable,
  setIsLoading,
  setLoadingMessage,
} from "../chatSlice";
import {eventChat} from "./chatEvent";
import {EVENTS_ID} from "../../../../constants/api";

const slicePrefix = SLICES_NAMES.CHAT

interface IChatInitParams {
  uuid: string;
  cuid?: string;
  context?: {},
}

export const initChat = createAsyncThunk(
  slicePrefix + '/initChat',
  (_args: IChatInitParams, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    const url = API_ROUTES.INIT.route

    dispatch(setIsLoading(true))
    dispatch(setIsComposeAvailable(false))

    return setTimeout(async () => {
      await $api
        .post(`${url}`, _args)
        .then((response) => {
          if (response.status === 200 && response?.data?.result) {
            localStorage.setItem(CUID, response?.data?.result?.cuid)
          }
          dispatch(eventChat({
            cuid: response?.data?.result?.cuid,
            euid: EVENTS_ID.READY,
          }))
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          dispatch(setIsLoading(false))
          dispatch(setIsComposeAvailable(true))
        })
    }, DELAYS.DEFAULT)
  }
)