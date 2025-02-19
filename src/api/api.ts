import axios from "axios";
import {API_BASE} from "@/constants/api";


export const $axios = axios.create({
  baseURL: API_BASE,
})