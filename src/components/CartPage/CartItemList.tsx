import { Title } from "@/utils/Typography";
import { QuantityButton } from "../QuantityButton";
import { RiDeleteBinFill } from "react-icons/ri";
import { Store } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuatity } from "@/lib/cartSlice";

export const CartItemList = () => {

    const cartItems = useSelector((state: Store) => state.cart.items);
    const dispatch = useDispatch();

    const updateQuantityHandler = (change: number, productId: string, colorvarinat: string, sizeVariant: string) => {
        const cartItem = cartItems.find(i => i.id == productId && i.colorvarinat == colorvarinat && i.sizeVariant == sizeVariant)!;
        
        if (cartItem.quantity + change <= 0) {
            dispatch(removeItem({id: cartItem.id, colorvarinat, sizeVariant}));
            return;
        }

        dispatch(updateQuatity({id: cartItem.id, colorvarinat, sizeVariant, quantity: cartItem.quantity + change})); 
    }

    const removeItemFromCart = (productId: string, colorvarinat: string, sizeVariant: string) => {
        dispatch(removeItem({id: productId, colorvarinat, sizeVariant}));
    }

    return (
        <div className="py-5 px-6 border border-border rounded-[20px]">
            {
                cartItems.map((cartItem, index) => {
                    return (
                        <>
                        <div className="flex gap-4 w-2xl max-sm:w-full">
                            <img src={cartItem.imageUrl} className="w-28 h-28 rounded-[8px]" />
                            <div className="flex-1 flex flex-col">
                                <div className="flex justify-between"> 
                                    <div className="flex flex-col">
                                        <p className="text-xl font-semibold"> {cartItem.productName} </p>
                                        <p className="text-sm mt-1"> Size: <span className="text-sm text-secondary"> {cartItem.sizeVariant} </span> </p>
                                        <p className="text-sm mt-0.5"> color: <span className="text-sm text-secondary">  {cartItem.colorvarinat} </span> </p>
                                    </div>

                                    <RiDeleteBinFill className="h-6 w-6 text-red-500 cursor-pointer" onClick={() => removeItemFromCart(cartItem.id, cartItem.colorvarinat, cartItem.sizeVariant)} />
                                </div>
                                <div className="flex justify-between mt-2">
                                    <Title> {"$" + cartItem.price} </Title>
                                    <QuantityButton productId={cartItem.id} colorvarinat={cartItem.colorvarinat} sizeVariant={cartItem.sizeVariant} 
                                                    quantity={cartItem.quantity} updateQuantity={updateQuantityHandler} customStyles={"gap-6 grow-0"} 
                                    />
                                </div>
                            </div>
                        </div>
                        {index != cartItems.length-1 && <hr className="border-border my-6" /> }
                        </>
                    );
                })
            }
        </div>
    );
}