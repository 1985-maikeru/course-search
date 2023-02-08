// others
import { promiseAll } from "@/utils/common";
// api
import { getCourseListData } from "@/pages/api/list";

/**
 * requestPageData
 * @param context
 */
export function requestPageData(context: ANY_OBJECT) {
    return promiseAll(
        [
            getCourseListData({
                data: {
                    post_id: context?.query.post_id
                },
                context
            })
        ],
        {
            then: ([
                    { data: postData },
                ]) => (
                {
                    ...postData,
                }
            ),
        }
    );
}
