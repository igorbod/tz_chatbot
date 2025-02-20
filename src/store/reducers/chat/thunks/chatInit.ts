import {SLICES_NAMES} from "@/constants/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "@/constants/api";
import {$api} from "@/api/api";

const slicePrefix = SLICES_NAMES.CHAT

interface IChatInitParams {
  uuid: string;
  cuid?: string;
  context?: {},
}

export const initChat = createAsyncThunk(
  slicePrefix + '/initChat',
  async (args: IChatInitParams, thunkAPI) => {
    const url = API_ROUTES.INIT.route
    try {
      const response = await $api.post(url, args)

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
)
