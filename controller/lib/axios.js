import axios from "axios";
import * as dotenv from 'dotenv'

dotenv.config()

// console.log(process.env.TOKEN)
const MY_TOKEN = process.env.TOKEN;
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
    return {
        get(method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            });
        },
        post(method, data) {
            return axios({
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data,
            });
        },
    };
}

export const axiosInstance = getAxiosInstance();
