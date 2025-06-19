import { Product } from "@/models/Product";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { useRouter } from "next/router";
import { NO_IMAGE_URL } from "@/utils/Constant";

interface Props {
    product: Product;
    customStyles?: string;
}

export const ProductCard = (props: Props) => {
    const {id, name, description, discountedPrice, price, variants, rating} = {...props.product};
    const roundedRating = ((rating ?? 0) * 2) / 2;
    const hasHalfStar = roundedRating != Math.floor(roundedRating);
    const discountPercentage = Math.floor((((discountedPrice || 0) - price) / price)*100);
    const images: string[] =  variants?.colorVariants[0]?.images || [];

    const router = useRouter();
    
    const goToProduct = () => {
        router.push(`/product/${id}`);
    };
    
    return (
    <div className="cursor-pointer" onClick={goToProduct}>
        {images.length > 0 && <img src={images[0]} className={`w-[295px] h-[295px] rounded-[20px] transform transition-transform duration-300 hover:scale-105 ${props.customStyles}`} />}
        {images.length == 0 && <img src={NO_IMAGE_URL} className={`w-[295px] h-[295px] rounded-[20px] ${props.customStyles}`} /> }

        <p className="text-[18px] mt-4 capitalize font-semibold">
            {name.toLowerCase()}
        </p>
        <div className="flex">
            <div className="flex gap-1 my-1">
                {
                    Array(Math.floor(roundedRating)).fill(0).map((_, index) => {
                        return <FaStar key={index} className="h-3.5 w-3.5" color="#FFC633"/> 
                    })
                }
                {
                    hasHalfStar && <FaStarHalf className="h-3.5 w-3.5" color="#FFC633"/> 
                }
            </div>
            <div  className="ml-2">{roundedRating.toFixed(1)}/<span className="text-secondary">5</span></div>
        </div>
        <div className="flex flex-row gap-2 items-center">
            <div className="text-[20px] font-semibold tracking-tight">
                {"$" + (discountedPrice ?? price)}
            </div>
            {discountedPrice && <div className="text-[20px] line-through font-semibold text-black opacity-40 tracking-normal">
                {"$" + price}
            </div>}
            {discountedPrice && <div className={`bg-red-100 text-red-500 text-[12px] h-7 px-3.5 py-1.5 rounded-full flex items-center justify-center`}>
                <span> {discountPercentage + "%"} </span>
            </div>}
        </div>
    </div>
    )
}