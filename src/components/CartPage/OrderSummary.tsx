import { Store } from "@/lib/store";
import { Button } from "@/utils/components-shadcn/ui/button";
import { Title } from "@/utils/Typography";
import { useRouter } from "next/router";
import { FaTag, FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";

export const OrderSummary = () => {
    const cartItems = useSelector((state: Store) => state.cart.items);
    const router = useRouter();
    
    const subTotal = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    const discountPercentate = 10;
    const estimatedTotal = (subTotal-((discountPercentate/100) * subTotal)).toFixed(2);

    const goToPage = (url: string) => {
        router.push(url);
    }

    return (
        <div className="border border-border rounded-[20px] py-5 px-6 h-fit w-[500px]">
           <Title>  Order summary </Title>
           <div className="mt-2 flex flex-col gap-1.5">
                <div className="flex justify-between">
                        <p className="text-base text-secondary"> Subtotal </p>
                        <p className="text-base font-medium"> {"$"+ subTotal} </p>
                </div>
                <div className="flex justify-between">
                        <p className="text-base text-secondary"> Discount(-{discountPercentate+"%"}) </p>
                        <p className="text-base text-red-500 font-medium"> {"-$"+ ((discountPercentate/100) * subTotal).toFixed(2)} </p>
                </div>
                <div className="flex justify-between">
                        <p className="text-base text-secondary"> Delivery Fee </p>
                        <p className="text-sm font-light italic "> Calculated at Checkout </p>
                </div>
           </div>

           <hr className="my-4" />

           <div className="flex justify-between">
                <p className="text-xl"> Estimated total </p>
                <p className="text-xl font-semibold"> {"$"+ estimatedTotal} </p>
            </div>

            <div className="flex gap-3 my-5">
                <div className="w-3/4 flex items-center bg-gray-100 rounded-full p-2 px-4">
                    <FaTag className="h-5 w-5 text-secondary" />
                    <input
                        type="text"
                        placeholder="Add promo code"
                        className="bg-transparent outline-none ml-2 text-gray-600 w-full"
                    />
                </div>
                <Button className="w-1/4 rounded-full h-[44px] cursor-pointer bg-brand hover:bg-brand" onClick={()=> {}}> Apply </Button>
            </div>
            
            <Button className="text-base w-full rounded-full h-[54px] cursor-pointer bg-brand hover:bg-brand" onClick={() => goToPage('/checkout')}> 
                Go to Checkout 
                <span className="ml-1"> <FaArrowRightLong className="!h-5 !w-5" /> </span>
            </Button>
        </div>
    );
}