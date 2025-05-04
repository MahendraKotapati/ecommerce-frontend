import { SecondaryText, Title } from "@/utils/Typography";
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";


export interface Review {
    id: string;
    name: string;
    reviewText: string;
    postedDate: string;
    rating?: number;
}

interface Props {
    review: Review;
    customStyles?: string;
}

export const ReviewCard = (props: Props) => {
    const {name, reviewText, postedDate, rating} = {...props.review};

    const roundedRating = ((rating ?? 0) * 2) / 2;
    const hasHalfStar = roundedRating != Math.floor(roundedRating);
    const showPostedDate = false;

    return (
        <div className={`border-1 border-border rounded-2xl py-7 px-8 ${props.customStyles}`}>
            <div className="flex gap-1.5 mb-4">
                {
                    Array(Math.floor(roundedRating)).fill(0).map(() => {
                        return <FaStar className="h-5.5 w-5.5" color="#FFC633"/> 
                    })
                }
                {
                    hasHalfStar && <FaStarHalf className="h-5.5 w-5.5" color="#FFC633"/> 
                }
            </div>
            <div className="flex items-center mb-1">
                <Title className="text-xl">{name}</Title>
                <FaCircleCheck className="h-4.5 w-4.5 m-1" color="green" /> 
            </div>
            <SecondaryText> {reviewText} </SecondaryText>
            {showPostedDate && <SecondaryText className="mt-4"> {postedDate} </SecondaryText>}
        </div>
    );
};