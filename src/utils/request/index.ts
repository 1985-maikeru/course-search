// types
import Axios from "axios";
import { REQUEST_CONFIG } from "@/types/common/http";

/**
 * request
 */
export async function request(this: REQUEST_CONFIG) {
    const {
        data,
        url,
        method,
        cbSuccess
    } = this;

    let headers: any = {
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "https://app.rakuten.co.jp"
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
        const response = await Axios.request({
            // ...nativeConfig,
            baseURL: process.env.BASE_URL,
            url: url,
            data: {
                page: 4
            },
            method: method || "POST",
            params: data,
            headers,
        });

        if(cbSuccess) {
            await cbSuccess(response.data);
        }


        return response;
    } catch (err: any) {
            return "エラーやで";
    }
}
