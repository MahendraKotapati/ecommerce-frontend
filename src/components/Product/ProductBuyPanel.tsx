import { Product } from "@/models/Product";
import { Button } from "@/utils/components-shadcn/ui/button";
import { SecondaryText } from "@/utils/Typography";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { QuantityButton } from "../QuantityButton";


interface Props {
    product: Product;
}

export const ProductBuyPanel = (props: Props) => {

    const {price, discountedPrice, rating} = {...props.product};

    const roundedRating = ((rating ?? 0) * 2) / 2;
    const hasHalfStar = roundedRating != Math.floor(roundedRating);
    const discountPercentage = Math.floor((((discountedPrice || 0) - price) / price)*100);
    const colorsVariants = ["darkred", "green", "black"];
    const sizeVariants = ["small", "medium", "large", "x-large"];
    const [selectedColor, setSelectedColor] = useState(colorsVariants[0]);
    const productImages = ["/productP1.jpeg", "/productP3.png", "/productP2.png"]; // /productP1.jpeg
    const [selectedImage, setSelectedImage] = useState(productImages[0]);
    const [quantity, setQuantity] = useState(0);

    const colorBgMap: {[color: string] : string} = {};
    colorsVariants.map((color) => {
        colorBgMap[color] = `bg-${color}-700`;
    });

    const [selectedSize, setSelectedSize] = useState(sizeVariants[1]);

    const addToCartHandler = () => {
        if (quantity > 0)
            return ;
        else 
            setQuantity(1);
    }

    return (
        <div className="mx-[108px] mt-8 mb-16"> 
            <div className="flex gap-6 w-full">

                <div className="flex-1 flex gap-4">
                    <div className="w-[150px] h-[500px] flex flex-col gap-4">
                        {
                            productImages.slice(0, 3).map((imageUrl) => {
                                return (
                                    <div className="relative flex-1 flex">
                                        <img src={imageUrl} 
                                            onClick={() => setSelectedImage(imageUrl)} 
                                            className={`absolute inset-0 w-full h-full rounded-[20px] ${(imageUrl == selectedImage) ? " border-2 border-brand" : "border border-border"}`}>    
                                        </img>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="relative w-[444px] h-[500px] "> 
                        <img src={selectedImage} className="bg-border border border-border rounded-[20px] absolute inset-0 w-full h-full" /> 
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-3 w-full">
                    <div className="text-4xl uppercase"> One Life Graphic T-shirt </div>

                    <div className="flex items-center">
                        <div className="flex gap-1 my-1">
                            {
                                Array(Math.floor(roundedRating)).fill(0).map(() => {
                                    return <FaStar className="h-6 w-6" color="#FFC633"/> 
                                })
                            }
                            {
                                hasHalfStar && <FaStarHalf className="h-6 w-6" color="#FFC633"/> 
                            }
                        </div>
                        <div className="ml-2 text-base">{roundedRating.toFixed(1)}/<span className="text-secondary">5</span></div>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <div className="text-3xl font-semibold tracking-tight">
                            {"$" + (discountedPrice ?? price)}
                        </div>
                        {discountedPrice && <div className="text-3xl line-through font-semibold text-black opacity-40 tracking-normal">
                            {"$" + price}
                        </div>}
                        {discountedPrice && <div className={`bg-red-100 text-red-500 text-base h-7 px-3.5 py-1.5 rounded-full flex items-center justify-center`}>
                            <span> {discountPercentage + "%"} </span>
                        </div>}
                    </div>

                    <SecondaryText> 
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. 
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style. 
                    </SecondaryText>

                    <hr className="border-border my-1" />
                    
                    <div className="">
                        <SecondaryText> Select Colors </SecondaryText>
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {
                                Object.keys(colorBgMap).map((color) => {
                                    return (
                                        <div 
                                            key={color}
                                            className={`relative h-8 w-8 rounded-full ${colorBgMap[color]} flex items-center justify-center border border-border cursor-pointer`}
                                            style={{backgroundColor: color}}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            {selectedColor == color && <span className="absolute"> 
                                                <FaCheck className="h-4 w-4" color="#ffff"/> 
                                            </span>}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <hr className="border-border my-1"/>
                    
                    <div className="">
                        <SecondaryText> Choose Size </SecondaryText>
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {
                                sizeVariants.map((size) => {
                                    return (
                                        <Button 
                                            onClick={() => setSelectedSize(size)}
                                            className={`capitalize cursor-pointer rounded-full
                                                        ${(selectedSize == size) ? 'bg-brand hover:bg-brand' : ' bg-border text-secondary hover:bg-border hover:text-secondary'}`}> 
                                            {size} 
                                        </Button>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <hr className="border-border my-1"/>
                    <div className="flex gap-1.5 justify-center">
                        <QuantityButton quantity={quantity} setQuantity={setQuantity} customStyles="w-[150px] w-1/4" />
                        <Button className="rounded-full w-3/4 h-[44px] cursor-pointer bg-brand hover:bg-brand" onClick={addToCartHandler}> Add to Cart </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}