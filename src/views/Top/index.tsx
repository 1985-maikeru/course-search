// lib
import Head from 'next/head'
// components
import List from "@/components/common/List";
// hooks
import { useQueryState } from "@/hooks/useQueryState";
import { useRoute } from "@/hooks/useRoute";
// other
import styles from '../../../styles/Home.module.css'

const TopView = () => {
    const router = useRoute();
    const {
        query: { page },
    } = router;
    // const [courses]: any  = useQueryState(['Courses', page]);
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    ゴルフ場検索
                </h1>

                <p className={styles.description}>
                    日本全国のゴルフ場を検索しよう！！
                </p>
                <List /* listData={courses} */ />
            </main>

            <footer className={styles.footer}>
                next.js tanstack Query 練習 ゴルフ場検索
            </footer>
        </div>
    )
}

export default TopView;