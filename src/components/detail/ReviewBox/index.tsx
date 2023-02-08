// lib
import Rating from '@mui/material/Rating';
import { Avatar } from '@chakra-ui/react'

const ReviewBox = ({ review }: any) => {

    const test = (text: string) => {
        return text.match(/(?<=\().*?(?=\))/)
    }
    const test2 = (str: string) => {
        return str.substr(0, str.indexOf('('));
    }
    return (
        <div className='review_box'>
            <div className="profile">
                <div className="icon">
                    <Avatar src='/icon_man.png' />
                </div>
                <p>{review.nickName}</p>
            </div>
            <div className="comment_wrap">
                <p className="title">{test2(review.title)}</p>
                <p className="comment">{review.comment}</p>
                <p className="date">{test(review.title)}</p>
            </div>
            <div className="rating_area">
                <div className="rating">
                    <p>コストパフォーマンス</p>
                    <Rating value={review?.costperformance} precision={0.5} readOnly />
                </div>
                <div className="rating">
                    <p>コース/戦略性</p>
                    <Rating value={review?.course} precision={0.5} readOnly />
                </div>
                <div className="rating">
                    <p>距離が長い</p>
                    <Rating value={review?.distance} precision={0.5} readOnly />
                </div>
                <div className="rating">
                    <p>総合評価</p>
                    <Rating value={review?.evaluation} precision={0.5} readOnly />
                </div>
                <div className="rating">
                    <p>設備が充実</p>
                    <Rating value={review?.facility} precision={0.5} readOnly />
                </div>
                <div className="rating">
                    <p>フェアウェイが広い</p>
                    <Rating value={review?.fairway} precision={0.5} readOnly />
                </div>
                <div className="rating">
                    <p>食事が美味しい</p>
                    <Rating value={review?.meal} precision={0.5} readOnly />
                </div>
                <div className="rating">
                    <p>スタッフ接客	</p>
                    <Rating value={review?.staff} precision={0.5} readOnly />
                </div>
            </div>
        </div>
    )
}

export default ReviewBox;
