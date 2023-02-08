/**
 * getURLSearchParams
 */
export function getURLSearchParams() {
    const searchParams =
        typeof window === "undefined" ? "" : window.location.search;
    const pairs = searchParams.slice(1).split("&");

    const result: ANY_OBJECT = {};
    try {
        pairs.forEach((pair) => {
            const _pair = pair.split("=");
            result[_pair[0]] = decodeURIComponent(_pair[1] || "");
        });
    } catch (e) {
        delete result[""];

        return result;
    }
    delete result[""];

    return result;
}

export function getOriginUrl() {
    const originUrl = typeof window === "undefined" ? "" : window.location.origin;

    return originUrl;
}
