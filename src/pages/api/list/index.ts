// types
import { ASYNC_ACTION } from "@/types/common/http";
// constants
import { LIST_ENDPOINTS } from "@/constants/endpoint/golfCourse";
// utils
import { request } from "@/utils/request";

export type PARAMS = {
    data: any
};
export type DATA = {
    page: string
    queryKey: string[],
    data: any
};

const cbSuccess = (data: any) => {
    console.log("Success!!");
}

export const getCourseListData = (props: any) => {
    const queryKey = props.queryKey;

    return request.call({
        ...props,
        url: LIST_ENDPOINTS.REQUEST_COUSE_LIST,
        data: {
            page: queryKey?.[1],
            keyword: queryKey?.[2]
        },
        method: "GET",
        cbSuccess
    });
    // return axios.post('http://localhost:3001/hello',{ params: { id: "1"} })
}
