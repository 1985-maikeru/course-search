// lib
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useApi = <
    TQueryKey extends [string, (Record<string, unknown> | string)?],
    TQueryFnData,
    TError,
    TData = TQueryFnData,
>(
    queryKey: TQueryKey,
    fetcher: (requestUrl: string) => Promise<TQueryFnData>,
    options?: Omit<
        CacheQueryOptions,
        'queryKey' | 'queryFn'
    >,
) => {
    // accessTokenを何らかの形で取得する
    // const { accessToken } = useAuthGuardContext();

    return useQuery({
        queryKey,
        queryFn: async () => fetcher("https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json&applicationId=1064065473399477324"),
        ...options,
    });
};