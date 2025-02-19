import {SLICES_NAMES} from "@/constants/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "@/constants/api";
import {$api} from "@/api/api";
import {DELAYS} from "@/constants/main";
import {CUID} from "@/constants/localStorage";
import {setIsComposeAvailable} from "../chatSlice";

const slicePrefix = SLICES_NAMES.CHAT

interface IChatRequestParams {
  text: string;
  cuid: string;
  context?: {},
}

export const requestChat = createAsyncThunk(
  slicePrefix + '/requestChat',
  (_args: IChatRequestParams, thunkAPI) => {
    const url = API_ROUTES.REQUEST.route
    const dispatch = thunkAPI.dispatch;

    dispatch(setIsComposeAvailable(false))

    return setTimeout(async () => {
      await $api
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
          dispatch(setIsComposeAvailable(true))
        })
    }, DELAYS.DEFAULT)
  }
)