import { useRouter } from "next/router";
import { BRAND_NAME } from "./Home";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Store } from "@/lib/store";
import { useState } from "react";
import { PRODUCTS_LIST, SPECIAL_FILTERS } from "@/utils/Constant";
import { Product } from "@/models/Product";
import { FaXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useIsMobile } from "@/customHooks/useIsMobile";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/utils/components-shadcn/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/utils/components-shadcn/ui/popover";

const navigation = [
    {navTitle: 'Shop', navLink: '/category/-1'}, 
    {navTitle: 'New Arrivals', navLink: `/category/-1?filter=${SPECIAL_FILTERS.NEW_ARRIVALS}`}, 
    {navTitle: 'Top Selling', navLink: `/category/-1?filter=${SPECIAL_FILTERS.TOP_SELLING}`}, 
    {navTitle: 'On Sale', navLink: `/category/-1?filter=${SPECIAL_FILTERS.ON_SALE}`}
];


interface Props {
    customStyles?: string;
}

export const Header = (props: Props) => {

    const router = useRouter();
    const cartItems = useSelector((state: Store) => state.cart.items);
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
    const isMobile = useIsMobile();


    const goToPage = (url: string) => {
        router.push(url);
    }

    const searchHandler = (query: string) => {
        setSearchQuery(query);
        setSearchResults(PRODUCTS_LIST.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())));
    }

    const openSearchPopup = () => {
        setIsSearchPopupOpen(true);
        document.body.style.overflow = "hidden";
    }

    const closeSearchPopup = () => {
        setIsSearchPopupOpen(false);
        setSearchQuery('');
        document.body.style.overflow = "auto"; 
    }

    const getSearchResultsJSX = () => {
        return (
            searchQuery && 
                <div className="w-full absolute top-12 left-0 z-10 border border-border p-5 rounded-2xl bg-white flex flex-col max-h-[500px] overflow-scroll"> 
                    {searchResults.length > 0 &&
                        searchResults.map((product, index) => {
                            return (
                                <>
                                    <div className="flex gap-2.5 items-center cursor-pointer" onClick={() => goToPage(`/product/${product.id}`)}> 
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
                </div>
        )
    }

    const getMobileMenu = () => {
        return (
            <Drawer direction="left">
                <DrawerTrigger>
                    <div className="hidden max-sm:block max-sm:mr-2.5"> 
                        <IoMenu className="h-6 w-6 text-black" />
                    </div>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle> 
                            <div className={"text-[24px] font-bold cursor-pointer"} onClick={() => goToPage("/")}>{BRAND_NAME} </div> 
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="pl-4">
                        {navigation.map((nav) => {
                            return <div key={nav.navTitle} onClick={() =>goToPage(nav.navLink)} className={"text-base font-normal my-1"}> {nav.navTitle} </div>
                        })}
                    </div>
                </DrawerContent>
                </Drawer>
        );
    }

    return (
        <div className={"flex items-center my-3 mx-[100px] max-sm:mx-4" + ` ${props.customStyles}`}>
            {getMobileMenu()}
            <div className={"text-[24px] font-bold cursor-pointer"} onClick={() => goToPage("/")}>{BRAND_NAME}</div>
            <div className={"flex gap-6 items-center mx-8 max-sm:hidden"}>
                {
                    navigation.map((nav) => {
                        return <div key={nav.navTitle} onClick={() =>goToPage(nav.navLink)} className={"text-base font-medium cursor-pointer"}> {nav.navTitle} </div>;
                    })
                }
            </div>

            {!isMobile && <div className="flex items-center bg-gray-100 relative rounded-full w-[577px] p-2 px-4 border border-transparent focus-within:border-brand focus-within:shadow-sm transition">
                 <IoSearch className="h-6 w-6 text-black opacity-40" />
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="bg-transparent outline-none ml-2 text-gray-600 w-full"
                    onChange={(e) => searchHandler(e.target.value)}
                    value={searchQuery}
                />
                {searchQuery && <FaXmark onClick={() => setSearchQuery('')} className="h-5 w-5 text-brand opacity-40 hover:opacity-100 cursor-pointer" />}
                {getSearchResultsJSX()}
            </div>}

            {isSearchPopupOpen && 
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-secondary z-10 overflow-clip" onClick={closeSearchPopup}>
                    <div onClick={(e) => e.stopPropagation()} className="flex items-center bg-gray-100 relative rounded-full mx-3 my-4 p-2 px-4 border border-transparent">
                        <IoSearch className="h-6 w-6 text-black opacity-40" />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="bg-transparent outline-none ml-2 text-gray-600 w-full"
                            onChange={(e) => searchHandler(e.target.value)}
                            value={searchQuery}
                        />
                        {searchQuery && <FaXmark onClick={closeSearchPopup} className="h-5 w-5 text-brand opacity-40 hover:opacity-100 cursor-pointer" />}
                        {getSearchResultsJSX()}
                    </div>
                </div>
            }
            
            <div className="flex items-center gap-3 ml-auto">
                {   
                    isMobile && !isSearchPopupOpen && 
                        <IoSearch className="h-6 w-6 text-black" onClick={openSearchPopup} />
                }
                
                <Popover>
                    <PopoverTrigger> <FaCircleUser className="h-5.5 w-5.5 cursor-pointer" /> </PopoverTrigger>
                    <PopoverContent className="w-fit py-1 px-2 bg-brand text-white"> <p>Guest</p> </PopoverContent>
                </Popover>

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