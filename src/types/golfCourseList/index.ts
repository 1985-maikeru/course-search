export type ITEM = {
    Item: {
        golfCourseId: number;
        golfCourseName: string;
        golfCourseAbbr: string;
        golfCourseNameKana: string;
        golfCourseCaption: string;
        address: string;
        latitude: number;
        longitude: number;
        highway: string;
        golfCourseDetailUrl: string;
        reserveCalUrl: string;
        ratingUrl: string;
        golfCourseImageUrl: string;
        evaluation: number;
    }
}


export type GOLF_COURSE_LIST = {
    count: number;
    page: number;
    first: number;
    last: number;
    hits: number;
    carrier: number;
    pageCount: number;
    Items: Array<ITEM>
}
