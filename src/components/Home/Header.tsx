import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { BRAND_NAME } from "./Home";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Store } from "@/lib/store";

export const Header = () => {

    const navigation = ["Shop", "On Sale", "New Arrivals", "Brands"];
    const router = useRouter();
    const cartItems = useSelector((state: Store) => state.cart.items);

    const goToPage = (url: string) => {
        router.push(url);
    }

    return (
        <div className={styles.header_container}>
            <div className={styles.brand + " cursor-pointer"} onClick={() => goToPage("/")}>{BRAND_NAME}</div>
            <div className={styles.nav_container}>
                {
                    navigation.map((navTitle) => {
                        return <div key={navTitle} className={styles.nav_title}> {navTitle} </div>;
                    })
                }
            </div>
            <div className="flex items-center bg-gray-100 rounded-full w-[577px] p-2 px-4">
                 <IoSearch className="h-6 w-6 text-black opacity-40" />
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="bg-transparent outline-none ml-2 text-gray-600 w-full"
                />
            </div>
            
            <div className="flex items-center gap-3 ml-auto">
                <div className="cursor-pointer"> <FaCircleUser className="h-5.5 w-5.5" /> </div>
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