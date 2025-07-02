import { Store } from "@/lib/store";
import { Button } from "@/utils/components-shadcn/ui/button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AddressErrors } from "./Address";

export const DELIVERY_FEE = 20;

interface Props {
    placeOrderHandler: () => void;
}

export const Summary = (props: Props) => {

    const cartItems = useSelector((state: Store) => state.cart.items);
    
    const subTotal = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    const discountPercentate = 10;
    const total = (subTotal-((discountPercentate/100) * subTotal)+DELIVERY_FEE).toFixed(2);

  return (
    <div className="w-5/12 h-fit flex flex-col border border-border rounded-[20px] p-5 max-sm:w-full">
        <p className="text-xl font-semibold mb-4"> Order Summary </p>
        <div className="flex flex-col gap-3">
            {
                cartItems.map((cartItem, index) => {
                    return (
                        <>
                            <div className="flex gap-4">
                                <img src={cartItem.imageUrl} className="w-15 h-15 rounded-[8px] border border-brand" />
                                <div className="flex-1 flex flex-col">
                                    <p className="text-[14px]"> {cartItem.productName } </p>
                                    <p className="text-sm lowercase"> <span className="text-sm text-secondary"> {cartItem.sizeVariant + ", " + cartItem.colorvarinat} </span> </p>
                                    <p className="text-[14px] font-semibold text-brand"> {"$" + cartItem.price + " X " + cartItem.quantity} </p>
                                </div>
                                <p className="ml-auto text-[14px] font-semibold text-brand"> {"$" + (cartItem.price * cartItem.quantity)} </p>
                            </div>
                        </>
                    );
                })
            }
        </div>
        <div className="mt-4 flex flex-col gap-1.5">
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
                    <p className="text-base font-medium"> {"$"+ DELIVERY_FEE} </p>
            </div>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between">
            <p className="text-xl"> Total </p>
            <p className="text-xl font-semibold"> {"$"+ total} </p>
        </div>

        <div className="w-full flex items-start justify-center">
            <Button className="text-base rounded-full w-2/3 h-[54px] cursor-pointer bg-brand hover:bg-brand" onClick={props.placeOrderHandler}> 
                Place Order
            </Button>
        </div>
    </div>
    );
}