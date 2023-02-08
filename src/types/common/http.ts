import { AxiosRequestConfig } from "axios";
import { PREFETCH_CONTEXT } from "./next";

export type HTTP_METHOD =
    | "POST"
    | "GET"
    | "PATCH"
    | "DELETE"
    | "HEAD"
    | "OPTIONS"
    | "PUT"
    | "LINK"
    | "UNLINK";

export type RESPONSE_PREPROCESSOR = {
    schema: any;
    resPreprocess?: (renamedData: any) => any;
};

export type REQUEST_PAYLOAD<DATA = any, PARAMS = any> = {
    data: DATA;
    params: PARAMS;
};

export type ASYNC_ACTION<DATA, PARAMS> = {
      /** callback on success */
    cbSuccess?: (preprocessedResponse: ANY_OBJECT) => void;
    /** callback on error */
    cbError?: (error: ANY_OBJECT) => void;
    /** Should log API response to .data.log on Server? */
    isLogResponse?: boolean;
    /** Request payload */
    data?: Expand<DATA>;
    /** Request Query params */
    params?: Expand<PARAMS>;
    /** preprocess API request payload */
    reqPreprocessor?: ({
        data,
        params,
    }: REQUEST_PAYLOAD<DATA, PARAMS>) => REQUEST_PAYLOAD<DATA, PARAMS>;
    /** preprocess API response */
    resPreprocessor?: ShallowExpand<RESPONSE_PREPROCESSOR>;
    /** context object on server-side request */
    context?: PREFETCH_CONTEXT;
    /** is add token to request body */
    withToken?: boolean;
    /** baseURL */
    baseURL?: string;
    /** isMyPage */
    isMyPage?: boolean;
};

export type REQUEST_CONFIG = {
    url: string;
    data?: any,
    method: HTTP_METHOD,
    cbSuccess?: Function
} & Omit<AxiosRequestConfig, "url">;
