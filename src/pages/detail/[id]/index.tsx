// lib
import Head from 'next/head';
import Link from 'next/link';
import axios from "axios";
import { Image } from '@chakra-ui/react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { useQuery, useQueryClient, QueryClient, dehydrate, useHydrate } from '@tanstack/react-query';
// hooks
import { useRoute } from "@/hooks/useRoute";
// components
import ReviewBox from "@/components/detail/ReviewBox";
// datasources
import { requestPageData } from "@/dataSources/detail/requestPageData";
// others
import { promiseAll } from "@/utils/common";
import styles from '../../../../styles/Home.module.css'
import { parseHTML } from "@/utils/common";

const Detail = ({ pageData: { Item } }: any) => {
    const router = useRoute();
    /* const {
        query: { id }
    } = router;
    const fetchCourseDetail = async () => {
        // const res = await axios.get(`https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseDetail/20170623?format=json&applicationId=1064065473399477324&golfCourseId=${id}`);
        const res = await axios.get(`https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseDetail/20170623?format=json&applicationId=1064065473399477324&golfCourseId=80004`);
        return res.data;
    }; */
    /* const {
        data: courseData,
        isLoading,
        isError,
        error,
    }: any = useQuery(['CoursesDetail', id], fetchCourseDetail);

    console.log("courseData",courseData);
    const course = courseData?.Item; */

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{Item?.golfCourseName}</h1>
                <p>{parseHTML(Item?.golfCourseCaption)}</p>
                <div className="slider_wrap">
                    <Splide>
                        {
                            Item?.golfCourseImageUrl1 &&
                                <SplideSlide>
                                    <Image className='slide-img' src={Item?.golfCourseImageUrl1} alt="" />
                                </SplideSlide>
                        }
                        {
                            Item?.golfCourseImageUrl2 &&
                                <SplideSlide>
                                    <Image className='slide-img' src={Item?.golfCourseImageUrl2} alt="" />
                                </SplideSlide>
                        }
                        {
                            Item?.golfCourseImageUrl3 &&
                                <SplideSlide>
                                    <Image className='slide-img' src={Item?.golfCourseImageUrl3} alt="" />
                                </SplideSlide>
                        }
                        {
                            Item?.golfCourseImageUrl4 &&
                                <SplideSlide>
                                    <Image className='slide-img' src={Item?.golfCourseImageUrl4} alt="" />
                                </SplideSlide>
                        }
                        {
                            Item?.golfCourseImageUrl5 &&
                                <SplideSlide>
                                    <Image className='slide-img' src={Item?.golfCourseImageUrl5} alt="" />
                                </SplideSlide>
                        }
                    </Splide>
                </div>
                <div className='course_data'>
                    <div className="data">
                        <dl>
                            <dd>住所</dd>
                            <dt>{Item?.address}</dt>
                            <dd>電話番号</dd>
                            <dt>{Item?.telephoneNo}</dt>
                            <dd>最寄りインターチェンジ</dd>
                            <dt>{Item?.ic}</dt>
                        </dl>
                    </div>
                    <div className="map">
                        <iframe src={`https://www.google.com/maps?q=${Item?.latitude},${Item?.longitude}&output=embed`} width="600" height="400" loading="lazy"></iframe>    
                    </div>
                </div>
                <p>{parseHTML(Item?.golfCourseCaption)}</p>
                <p>{parseHTML(Item?.information)}</p>
                <p>{parseHTML(Item?.otherFacility)}</p>
                <div className="kuchikomi_area">
                    {
                        Item?.ratings.map(({ rating }: any, i) => {
                            return (
                                <ReviewBox key={i} review={rating} />
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default Detail;

export const getServerSideProps = async (content: any) => {
    const id = content?.query?.id;
    const queryClient = new QueryClient();
    const fetchCourseDetail = async () => {
        const res = await axios.get(`https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseDetail/20170623?format=json&applicationId=1064065473399477324&golfCourseId=${id}`);
        return res.data;
    };
    const data = await queryClient.fetchQuery(['CoursesDetail'], fetchCourseDetail )
    return {
        props: {
            page: "postDetail",
            title: "title",
            description: "",
            // dehydratedState: dehydrate(queryClient)
            pageData: data
        },
    }
    /*  return promiseAll(
        [
            requestPageData(content)
        ],
        {
            then: ([pageData]) => ({
                props: {
                    page: "postDetail",
                    title: pageData?.name,
                    pageData,
                    description: "",
                    dehydratedState: dehydrate(queryClient)
                },
            }),
        }
    ) */
}

