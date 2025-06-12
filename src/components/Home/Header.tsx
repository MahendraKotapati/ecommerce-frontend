import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { BRAND_NAME } from "./Home";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Store } from "@/lib/store";
import { useState } from "react";
import { PRODUCTS_LIST } from "@/utils/Constant";
import { Product } from "@/models/Product";
import { FaXmark } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/utils/components-shadcn/ui/tooltip";

interface Props {
    basicHeader?: boolean;
    customStyles?: string;
}

export const Header = (props: Props) => {

    const navigation = ["Shop", "On Sale", "New Arrivals", "Brands"];
    const router = useRouter();
    const cartItems = useSelector((state: Store) => state.cart.items);
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState('');


    const goToPage = (url: string) => {
        router.push(url);
    }

    const searchHandler = (query: string) => {
        setSearchQuery(query);
        setSearchResults(PRODUCTS_LIST.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())));
    }

    return (
        <div className={styles.header_container + ` ${props.customStyles}`}>
            <div className={styles.brand + " cursor-pointer"} onClick={() => goToPage("/")}>{BRAND_NAME}</div>
            {!props.basicHeader && <div className={styles.nav_container}>
                {
                    navigation.map((navTitle) => {
                        return <div key={navTitle} className={styles.nav_title}> {navTitle} </div>;
                    })
                }
            </div>}

            {!props.basicHeader && <div className="flex items-center bg-gray-100 relative rounded-full w-[577px] p-2 px-4">
                 <IoSearch className="h-6 w-6 text-black opacity-40" />
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="bg-transparent outline-none ml-2 text-gray-600 w-full"
                    onChange={(e) => searchHandler(e.target.value)}
                    value={searchQuery}
                />
                {searchQuery && <FaXmark onClick={() => setSearchQuery('')} className="h-5 w-5 text-brand opacity-40 hover:opacity-100 cursor-pointer" />}
                {searchQuery && 
                   <div className="w-full absolute top-12 left-0 z-10 border border-border p-5 rounded-2xl bg-white flex flex-col max-h-[500px] overflow-scroll"> 
                    {searchResults.length > 0 &&
                        searchResults.map((product, index) => {
                            return (
                                <>
                                    <div className="flex gap-2.5 items-center cursor-pointer" onClick={() => goToPage(`product/${product.id}`)}> 
                                        <img src={product.variants?.colorVariants[0].images[0]} className="w-15 h-15 rounded-[8px] border border-brand" />
                                        <div className="flex-1 flex flex-col">
                                            <p className="text-[14px]"> {product.name } </p>
                                            <div className="flex gap-1"> 
                                                <p className="text-[14px] font-semibold text-brand"> {"$" + (product.discountedPrice ?? product.price) } </p>
                                                {product.discountedPrice && <p className="text-[14px] text-brand opacity-40 line-through"> {"$" + product.price } </p>}
                                            </div>
                                        </div>
                                    </div>
                                    {(searchResults.length-1 != index) && <hr className="my-3" />}
                                </>
                            );
                        })
                    }
                    {searchResults.length == 0 && <p className="text-secondary"> No Products found</p>}
                </div>}
            </div>}
            
            <div className="flex items-center gap-3 ml-auto">
                <Tooltip>
                    <TooltipTrigger>
                        <FaCircleUser className="h-5.5 w-5.5" /> 
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Guest</p>
                    </TooltipContent>
                </Tooltip>

                <div className="cursor-pointer relative"> 
                    <PiShoppingCartSimpleBold className="h-6 w-6" onClick={() => goToPage('/cart')} /> 
                    { cartItems.length > 0 &&
                        <span className="h-4 w-4 absolute -top-2 -right-3.5 flex justify-center items-center border border-secondary text-secondary text-[10px] rounded-full"> 
                            {cartItems.length} 
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}