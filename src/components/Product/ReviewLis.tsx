import { BigTitle, SecondaryText, Title } from "@/utils/Typography";
import { FaArrowLeft, FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Review, ReviewCard } from "../ReviewCard";
import { REVIEWS_LIST } from "@/utils/Constant";
import { useEffect, useState } from "react";
import { Button } from "@/utils/components-shadcn/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/utils/components-shadcn/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa6";


enum SORT_BY {
   LATEST = 'latest',
   OLDEST = 'oldest'
}

const SECTION_TITLE = "All Reviews";

export const ReviewList = () => {

    const [reviewList, setReviewList ] =  useState<Review[]>(REVIEWS_LIST);
    const [selectedSorting, setSelectedSorting] = useState<SORT_BY>(SORT_BY.LATEST);

    useEffect(() => {
        updateSorting(SORT_BY.LATEST);
    }, []);

    const updateSorting = (option: SORT_BY) => {
        setSelectedSorting(option);
        
        if (option == SORT_BY.OLDEST) {
            setReviewList(reviewList.sort((a, b) => new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()));
        } else if (option == SORT_BY.LATEST) {
            console.log('in latest');
            console.log('reviewList: ', reviewList.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()));
            setReviewList(reviewList.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()));
        }      
    }


    return (
        <div className="mb-18 mt-16">
            <div className="flex justify-between items-center">
                <Title> {SECTION_TITLE} </Title>
                <div className="flex gap-1 max-sm:items-center max-sm:gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="bg-bg-custom-gray py-2 px-4 rounded-full"> 
                            <div className="flex gap-4 items-center">
                                <span className="capitalize"> {selectedSorting} </span> 
                                <span> <FaChevronDown className='h-4 w-4' /> </span>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onSelect={() => updateSorting(SORT_BY.LATEST)}> Latest </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={() => updateSorting(SORT_BY.OLDEST)}> Oldest </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className="rounded-full max-sm:hidden" disabled={true}>Write Review</Button>
                    <span className="hidden max-sm:block max-sm:p-1 max-sm:border-1 max-sm:border-border max-sm:rounded-full">
                        <FaPlus className="h-5 w-5 cursor-pointer text-black opacity-30" />
                    </span>
                </div>
            </div>

            <div className={`grid grid-cols-2 gap-3 mt-8 max-sm:grid-cols-1`}>
                {reviewList.map((review, index) => {
                    return <ReviewCard key={review.id + " " + index} review={review} showDate={true} customStyles="max-sm:p-5" />
                })}
            </div>
        </div>
    );
}