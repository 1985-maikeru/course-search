// lib
import Link from "next/link";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
// hooks
import { useQueryState } from "@/hooks/useQueryState";
import { useRoute } from "@/hooks/useRoute";
// api
import { getCourseListData } from "@/pages/api/list";
// components
import Box from "@/components/common/Box";
import Pager from "@/components/common/Pager";
import { useState } from "react";

// const keyword = encodeURI("埼玉");
const fetchCourses = async () => {
    const res = await axios.get('https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json&applicationId=1064065473399477324');
    return res.data;
};

const List = ({ listData }: any) => {
    const router = useRoute();
    const queryClient = useQueryClient();
    const {
        query: {
            page = 1,
            keyword = ""
        }
    } = router;

    // データフェッチしてくるパターン
    const {
        data: coursesData,
        isLoading,
        isError,
        error,
    }: any = useQuery(['Courses', page, keyword], getCourseListData);

    // データフェッチしない状態管理の基本の形
    // 参考 https://speakerdeck.com/soejima0124/management-global-state-using-to-tanstack-query?slide=13
    /* const messageQuery = useQuery(['message'], {
        initialData: "これはペンです", // 初期値
        enabled: false // キャッシュデータが存在する場合は、isSuccess状態になり、常時データが提供される
    }); */
    // const message: string | undefined = queryClient.getQueryData(['message']);

    // データフェッチしないパターンをカスタムフック化したもの
    // 値そのものと、更新用関数を取得
    const [message, setMessage] = useQueryState(['message'], "Hello");
    const [courses]: any  = useQueryState(['Courses', page]);
    const messageUpdate = () => {
        setMessage("good night");
    }   

    if (isLoading) {
        return <span>Loading...</span>;
    }
    
    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <>
            {/* <p>{message}</p>
            <button onClick={messageUpdate}>ボタンです</button> */}
            {/* <ul>
                {courses?.Items?.map((course: any) => (
                    <li key={course.Item.golfCourseId}>
                        {course.Item.golfCourseName}
                        <Link href={`/detail/${course.Item.golfCourseId}`}>
                            詳細
                        </Link>
                    </li>
                ))}
            </ul> */}
            <div>
                {
                    coursesData?.data?.count > 10 &&
                        <Pager count={coursesData?.data?.pageCount} page={coursesData?.data?.page} />
                }
                <ul className="flex">
                    {coursesData?.data?.Items?.map((course: any) => (
                        <li key={course.Item.golfCourseId}>
                            <Link href={`/detail/${course.Item.golfCourseId}`} className="border">
                                <Box Item={course.Item} />
                            </Link>
                        </li>
                    ))}
                </ul>
                {
                    coursesData?.data?.count > 10 &&
                        <Pager count={coursesData?.data?.pageCount} page={coursesData?.data?.page} />
                }
            </div>
        </>
    )
}

export default List;
