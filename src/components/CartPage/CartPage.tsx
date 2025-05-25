import { Footer } from "../Footer";
import { Header } from "../Home/Header";
import { CartItemList } from "./CartItemList";
import { OrderSummary } from "./OrderSummary";

export const CartPage = () => {
    return (
    <>
        <Header />
        <div className="mx-[100px] mt-4">
            <p className="text-4xl font-semibold"> Your Cart </p>
            <div className="flex gap-4 mb-16 mt-4">
                 <CartItemList />
                 <OrderSummary />
            </div>
        </div>
        <Footer />
    </>);
}