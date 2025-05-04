import { BigTitle, SecondaryText } from "@/utils/Typography";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Review, ReviewCard } from "../ReviewCard";
import { REVIEWS_LIST } from "@/utils/Constant";
import { useEffect, useState } from "react";

const SECTION_TITLE = "OUR HAPPY CUSTOMERS";

export const ReviewList = () => {

    const reviewList = REVIEWS_LIST;
    const [startIndex, setStartIndex] = useState(0);
    const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);

    useEffect(() => {
        setVisibleReviews(reviewList.slice(startIndex, startIndex+3));
    }, [startIndex]);

    const getNextReviews = () => {
        if (startIndex + 3 >= reviewList.length)
            return ;
        setStartIndex(() => startIndex+3);
    }

    const getPreviousReviews = () => {
        if (startIndex == 0)
            return ;
        setStartIndex(() => startIndex-3);
    }

    return (
        <div className="mb-18 mt-16">
            <div className="flex justify-between items-center mx-[108px]">
                <BigTitle> {SECTION_TITLE} </BigTitle>
                <div className="flex gap-4">
                    <FaArrowLeft onClick={getPreviousReviews} className={`h-4 w-4 ` + ((startIndex != 0) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')} />
                    <FaArrowRight onClick={getNextReviews} className={`h-4 w-4 ` + ((startIndex+3 < reviewList.length) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50')} />
                </div>
            </div>
            <div className="flex overflow-x-hidden">
                <div className={`flex gap-3 mt-8 ml-[108px]`} style={{minWidth: 'calc(100vw - 216px)', maxWidth: 'calc(100vw - 216px)'}}>
                    {visibleReviews.map((review) => {
                        return <ReviewCard key={review.id} review={review} customStyles="w-1/3" />
                    })}
                </div>
                {
                    ((startIndex+3) <= reviewList.length) && <ReviewCard review={reviewList[startIndex+3]} customStyles="blur-[2px] w-[50%] shrink-0 mt-8 ml-6" />
                }
            </div>

        </div>
    );
}