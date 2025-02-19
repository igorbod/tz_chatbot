import {SLICES_NAMES} from "@/constants/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "@/constants/api";
import { $api } from "@/api/api";
import {DELAYS} from "@/constants/main";
import {CUID} from "@/constants/localStorage";
import {setIsLoading} from "../chatSlice";

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

    return setTimeout(() => {
      $api
        .post(`${url}`, _args)
        .then((response) => {
          if (response.status === 200 && response?.data?.result) {
            localStorage.setItem(CUID, response?.data?.result?.cuid)
          }
         console.log(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          dispatch(setIsLoading(false))
        })
    }, DELAYS.LONG)
  }
)