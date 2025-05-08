import { BigTitle, SecondaryText, Title } from "@/utils/Typography";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Review, ReviewCard } from "../ReviewCard";
import { REVIEWS_LIST } from "@/utils/Constant";
import { useState } from "react";
import { Button } from "@/utils/components-shadcn/ui/button";



const SECTION_TITLE = "All Reviews";

export const ReviewList = () => {

    const [reviewList, setReviewList ] =  useState<Review[]>(REVIEWS_LIST);

    return (
        <div className="mb-18 mt-16">
            <div className="flex justify-between items-center mx-[108px]">
                <Title> {SECTION_TITLE} </Title>
                <Button>Click me</Button>
            </div>
            <div className={`grid grid-cols-2 gap-3 mt-8 mx-[108px]`}>
                {reviewList.map((review) => {
                    return <ReviewCard key={review.id} review={review} showDate={true} />
                })}
            </div>
        </div>
    );
}