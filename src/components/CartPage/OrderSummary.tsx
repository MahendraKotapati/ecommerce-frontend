import { Button } from "@/utils/components-shadcn/ui/button";
import { Title } from "@/utils/Typography";
import { FaTag, FaArrowRightLong } from "react-icons/fa6";

export const OrderSummary = () => {

    const subTotal = 565;
    const discountPercentate = 20;
    const deliveryFee = 15;
    const total = subTotal-((discountPercentate/100) * subTotal)+deliveryFee;

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
                        <p className="text-base text-red-500 font-medium"> {"-$"+ ((discountPercentate/100) * subTotal)} </p>
                </div>
                <div className="flex justify-between">
                        <p className="text-base text-secondary"> Delivery Fee </p>
                        <p className="text-base font-medium"> {"$"+ deliveryFee} </p>
                </div>
           </div>

           <hr className="my-4" />

           <div className="flex justify-between">
                <p className="text-xl"> Total </p>
                <p className="text-xl font-semibold"> {"$"+ deliveryFee} </p>
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
            
            <Button className="text-base w-full rounded-full h-[54px] cursor-pointer bg-brand hover:bg-brand" onClick={()=> {}}> 
                Go to Checkout 
                <span className="ml-1"> <FaArrowRightLong className="!h-5 !w-5" /> </span>
            </Button>

        </div>
    );
}