// lib
import parse from "html-react-parser";

/**
 * promiseAll - ignore promiseAll maximum promises
 * @param promises
 * @param then - onSuccess callback
 */
export function promiseAll<RESPONSE_TYPE>(
    promises: Promise<any>[],
    { then }: { then: (props: any) => RESPONSE_TYPE }
) {
    return Promise.all(promises).then(then);
}

/**
 * parseHTML
 * @param html
 */
export const parseHTML = (html?: string) => {
    if (typeof html === "string")
        return parse(html && html.replace(/\r?\n/g, "<br />"));

    return null;
};