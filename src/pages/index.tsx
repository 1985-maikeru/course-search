// lib
import axios from 'axios';
import { useQuery, useQueryClient, QueryClient, dehydrate } from '@tanstack/react-query';
// view
import TopView from "@/views/Top/";
// datasources
import { requestPageData } from "@/dataSources/top/requestPageData";
// others
import { promiseAll } from "@/utils/common";

const LIST_FETCH = "LIST_FETCH";

// const keyword = encodeURI("埼玉");
const fetchCourses = async () => {
  const res = await axios.get('https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json&applicationId=1064065473399477324');
  return res.data;
};

export default function Home() {
  
  return (
    <TopView />
  )
}

export const getServerSideProps = async (content: ANY_OBJECT) => {
  // const queryClient = new QueryClient();

  // const protocol = req.headers["x-forwarded-proto"] || "http";
  // const baseUrl = req ? `${protocol}://${req.headers.host}` : "";

  // await queryClient.prefetchQuery([LIST_FETCH], () => fetchCourses);

  return promiseAll(
    [
        requestPageData(content)
    ],
    {
        then: ([pageData]) => ({
            props: {
                page: "postDetail",
                title: "title",
                pageData,
                description: "",
                // dehydratedState: dehydrate(queryClient),
            },
        }),
    }
  )
}

