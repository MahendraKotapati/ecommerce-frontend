import { useSelector } from "react-redux";
import { Footer } from "../Footer";
import { Header } from "../Home/Header";
import { CartItemList } from "./CartItemList";
import { OrderSummary } from "./OrderSummary";
import { Store } from "@/lib/store";

export const CartPage = () => {
    const cartItems = useSelector((state: Store) => state.cart.items);

    return (
    <>
        <Header />
        <div className="mx-[100px] mt-4">
            <p className="text-4xl font-semibold"> Your Cart </p>
            {cartItems.length > 0 && 
                <div className="flex gap-4 mb-16 mt-4">
                 <CartItemList />
                 <OrderSummary />
                </div>
            }
            {
                cartItems.length == 0 && 
                <div className="w-full h-[372px] mb-16 mt-4 py-5 px-6 border border-border rounded-[20px]">
                    {
                        cartItems.length == 0 && 
                        <div className="flex justify-center items-center h-full">
                        <div className="text-secondary text-4xl"> Your Shopping cart is Empty. </div>
                        </div>
                    }
                </div>
            }
        </div>
        <Footer />
    </>);
}