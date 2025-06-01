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

const TEMP_PRODUCT_IMAGES = ["/productP1.jpeg", "/productP3.png", "/productP2.png"];

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
    const [selectedImage, setSelectedImage] = useState("");

    const cartItems = useSelector((state: Store) => state.cart.items);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(cartItems.find(item => item.id == id)?.quantity || 0);

    const colorBgMap: {[color: string] : string} = {};
    colors.map((color) => {
        colorBgMap[color] = `bg-${color}-700`;
    });

    useEffect(() => {
        const productImages = variants?.colorVariants.find((v) => v.color == selectedColor)?.images || TEMP_PRODUCT_IMAGES;
        setProductImages(productImages);
        setSelectedImage(productImages[0]);
    }, [selectedColor]);

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
            dispatch(removeItem({id}));
            setQuantity((quantity: number) => quantity + change);
            return ;
        }

        dispatch(updateQuatity({id, quantity: quantity + change})); 
        setQuantity((quantity: number) => quantity + change);
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
                        <img src={selectedImage} className="w-full h-full bg-border border border-border rounded-[20px] absolute inset-0 object-cover" /> 
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-3 w-full">
                    <div className="text-4xl uppercase"> {name} </div>

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
                                sizes.map((size) => {
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
                        <QuantityButton quantity={quantity} productId={id} updateQuantity={updateQuantityHandler} customStyles="w-[150px] w-1/4" />
                        <Button className="rounded-full w-3/4 h-[44px] cursor-pointer bg-brand hover:bg-brand" onClick={addToCartHandler}> Add to Cart </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}