import {SLICES_NAMES} from "@/constants/store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROUTES} from "@/constants/api";
import {$api} from "@/api/api";

const slicePrefix = SLICES_NAMES.CHAT

interface IChatEventParams {
  cuid: string;
  euid: string;
  context?: {},
}

export const eventChat = createAsyncThunk(
  slicePrefix + '/eventChat',
  async (args: IChatEventParams, thunkAPI) => {
    const url = API_ROUTES.EVENT.route
    // const dispatch = thunkAPI.dispatch;
    // const state = (thunkAPI.getState() as RootState).chatReducer;

    try {
      const response = await $api.post(url, args)
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
)