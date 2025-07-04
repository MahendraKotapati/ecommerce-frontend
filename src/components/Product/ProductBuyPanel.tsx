import { Product } from "@/models/Product";
import { Button } from "@/utils/components-shadcn/ui/button";
import { SecondaryText } from "@/utils/Typography";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { QuantityButton } from "../QuantityButton";
import { Store } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartItem, removeItem, updateQuatity } from "@/lib/cartSlice";
import { NO_IMAGE_URL, TEMP_PRODUCT_IMAGES } from "@/utils/Constant";

interface Props {
    product: Product;
}

export const ProductBuyPanel = (props: Props) => {

    const {id, name, description, price, discountedPrice, rating, variants} = {...props.product};
    
    const roundedRating = ((rating ?? 0) * 2) / 2;
    const hasHalfStar = roundedRating != Math.floor(roundedRating);
    const discountPercentage = Math.floor((((discountedPrice || 0) - price) / price)*100);

    const colors = (variants?.colorVariants || []).map(v => v.color) || [];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const sizes = variants?.sizeVariants || [];
    const [selectedSize, setSelectedSize] = useState(sizes[1]);

    const [productImages, setProductImages] = useState<string[]>([]);

    const [selectedImageIdx, setSelectedImageIdx] = useState(0);


    const cartItems = useSelector((state: Store) => state.cart.items);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);

    const colorBgMap: {[color: string] : string} = {};
    colors.map((color) => {
        colorBgMap[color] = `bg-${color}-700`;
    });

    useEffect(() => {
        let productImages = variants?.colorVariants.find((v) => v.color == selectedColor)?.images;
        if (!productImages || productImages?.length <3) {
            productImages = [...(productImages || []), ...TEMP_PRODUCT_IMAGES];
            productImages = productImages.slice(0, 3);
        }
        setProductImages(productImages);
        setSelectedImageIdx(0);

        setQuantity(cartItems.find(item => item.id == id && selectedColor == item.colorvarinat && item.sizeVariant == selectedSize)?.quantity || 0);
    }, [selectedColor]);

    useEffect(() => {
        setSelectedColor(colors[0]);
    }, [id]);

    useEffect(() => {
        setQuantity(cartItems.find(item => item.id == id && selectedColor == item.colorvarinat && item.sizeVariant == selectedSize)?.quantity || 0);
    }, [selectedSize]);

    const addToCartHandler = () => {
        if (quantity > 0)
            return ;
        else {
            const cartItem: CartItem = {
                id,
                productName: name,
                price: discountedPrice ? discountedPrice : price,
                sizeVariant: selectedSize,
                colorvarinat: selectedColor,
                imageUrl: variants?.colorVariants.find((v) => v.color == selectedColor)?.images[0] || '',
                quantity: 1
            }
            dispatch(addToCart(cartItem)); 
            setQuantity(1);
        }
    }

    const updateQuantityHandler = (change: number, productId: string) => {
        if (quantity + change <= 0) {
            dispatch(removeItem({id, colorvarinat: selectedColor, sizeVariant: selectedSize }));
            setQuantity((quantity: number) => quantity + change);
            return ;
        }

        dispatch(updateQuatity({id, colorvarinat: selectedColor, sizeVariant: selectedSize, quantity: quantity + change})); 
        setQuantity((quantity: number) => quantity + change);
    }

    return (
        <div className="mx-[108px] mt-8 mb-16 max-sm:mx-4"> 
            <div className="flex gap-6 w-full max-sm:flex-col">

                <div className="flex-1 flex gap-4 max-sm:flex-col-reverse">
                    <div className="w-[150px] h-[500px] flex flex-col gap-4 max-sm:gap-2 max-sm:flex-row max-sm:w-full max-sm:h-auto">
                        {
                            productImages.slice(0, 3).map((imageUrl, index) => {
                                return (
                                    <div key={index} className="flex-1 flex cursor-pointer">
                                        <img src={imageUrl} 
                                            onClick={() => setSelectedImageIdx(index)} 
                                            className={`inset-0 w-full h-full rounded-[20px] max-sm:rounded-2xl max-sm:w-full max-sm:h-auto
                                                ${imageUrl == NO_IMAGE_URL ? ' object-cover' : ' '}  
                                                 ${(index == selectedImageIdx) ? " border-2 border-brand" : " border border-border"}`}>    
                                        </img>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="w-[444px] h-[500px] max-sm:w-full max-sm:h-auto"> 
                        <img src={productImages[selectedImageIdx]} 
                            className={`w-full h-full bg-border border border-border rounded-[20px] inset-0 object-cover max-sm:w-full max-sm:h-auto  
                                ${productImages[selectedImageIdx] == NO_IMAGE_URL ? ' ' : ' transform transition-transform duration-300 hover:scale-105 '}`} 
                        /> 
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-3 w-full">
                    <div className="text-4xl uppercase max-sm:text-3xl"> {name} </div>

                    <div className="flex items-center">
                        <div className="flex gap-1 my-1">
                            {
                                Array(Math.floor(roundedRating)).fill(0).map((_, index) => {
                                    return <FaStar key={index} className="h-6 w-6" color="#FFC633"/> 
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
                        {description}
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
                                                <FaCheck className="h-4 w-4" color={`${color != 'white' ? '#ffff': '#000000'}`} /> 
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
                                sizes.map((size) => {
                                    return (
                                        <Button 
                                            key={size}
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
                        <QuantityButton quantity={quantity} productId={id} colorvarinat={selectedColor} sizeVariant={selectedSize} updateQuantity={updateQuantityHandler} customStyles="w-[150px] w-1/4 max-sm:w-2/5" />
                        <Button className="rounded-full w-3/4 h-[44px] cursor-pointer bg-brand hover:bg-brand max-sm:w-3/5" onClick={addToCartHandler}> Add to Cart </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}