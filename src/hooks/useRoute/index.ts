// libs
import { useRouter } from "next/router";
// types
// import { QUERY, ROUTE_PROPS } from "@/types/common";
// others
import { getURLSearchParams, getOriginUrl } from "./tools";
/* import {
    parseObjToSearchString,
    parseObjToSearchUrlString,
} from "@/utils/common"; */

/**
 * useRoute
 * @description custom NextJS useRouter
 */
export const useRoute = () => {
    const nextRouter = useRouter();
    const searchParams = getURLSearchParams();
    const originUrl = getOriginUrl();
    const query = {
        ...(nextRouter.query || {}),
        ...searchParams,
    } ;

    return {
        ...nextRouter,
        query,
        searchParams,
        originUrl,
    };
};

// export { parseObjToSearchString, parseObjToSearchUrlString };
