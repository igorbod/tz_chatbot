import {SLICES_NAMES} from "@/constants/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "@/constants/api";
import {$api} from "@/api/api";

const slicePrefix = SLICES_NAMES.CHAT

interface IChatRequestParams {
  text: string;
  cuid: string;
  context?: {},
}

export const requestChat = createAsyncThunk(
  slicePrefix + '/requestChat',
  async(args: IChatRequestParams, thunkAPI) => {
    const url = API_ROUTES.REQUEST.route

    try {
      const response = await $api.post(url, args)
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
)