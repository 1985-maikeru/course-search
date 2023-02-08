import { GetStaticPropsContext } from "next";

export type PAGE_PROPS = {
    page: string;
    pageData?: any | null;
    commonData?: any | null;
    title: string;
    description: string;
    // bodyClass?: string;
    // isLoadZenMapScript?: boolean;
    // preventCommonLoading?: boolean;
    // styleLinks?: never;
};

type PREBUILD_DATA = {
    props: PAGE_PROPS;
};
export type GET_SERVER_SIDE_PROPS = PREBUILD_DATA & { revalidate?: never };
export type GET_STATIC_PROPS = PREBUILD_DATA & { revalidate: number };
export type PREFETCH_CONTEXT = GetStaticPropsContext<{
    [key: string]: string;
}> & { query?: any } & any;

type LoadingValue = "lazy" | "eager" | undefined;
type LayoutValue = "fill" | "fixed" | "intrinsic" | "responsive" | undefined;

export type IMAGE_PROPS = Omit<
    JSX.IntrinsicElements["img"],
    "src" | "srcSet" | "ref" | "width" | "height" | "loading"
> & {
    src: string;
    quality?: number;
    priority?: boolean;
    loading?: LoadingValue;
    unoptimized?: boolean;
} & (
    | {
        width?: never;
        height?: never;
        unsized: true;
    }
    | {
        width?: never;
        height?: never;
        layout: "fill";
    }
    | {
        width: number;
        height: number;
        layout?: Exclude<LayoutValue, "fill">;
    }
);
