// lib
import { useQuery, useQueryClient, QueryKey } from '@tanstack/react-query';

export const useQueryState = <T>(key: QueryKey, initial?: T): [T, (arg: T) => void] => {
    const stateValue = useQuery<T>(key, {
        enabled: false,
        ...((initial !== undefined) ? { initialData: initial } : {})
    }).data as T;
    const queryClient = useQueryClient();
    const stateSetter = (arg: ((arg: T) => void) | T): void => {
        let newValue;
        if (typeof (arg) === 'function') {
            const prevValue = queryClient.getQueryData<T>(key);
            newValue = (arg as any)(prevValue)
        }
        else {
            newValue = arg;
        }
        queryClient.setQueryData<T>(key, newValue);

    }
    return [stateValue, stateSetter];
}