import { Button } from "@/utils/components-shadcn/ui/button";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

interface Props {
    productId: string;
    quantity: number;
    updateQuantity: (change: any, productId: string) => void;
    customStyles?: string;
}

export const QuantityButton = (props: Props) => {
    const {productId, quantity, updateQuantity, customStyles} = {...props};

    return (
        <>
            <div className={` ${quantity == 0 ? 'hidden' : ''} flex-1 flex items-center rounded-full justify-between bg-border py-1.5 px-3 ${customStyles}`}> 
                <FaMinus className="h-5 w-5 cursor-pointer" onClick={() => updateQuantity(-1, productId)} />
                <div>{quantity}</div>
                <FaPlus className="h-5 w-5 cursor-pointer" onClick={() => updateQuantity(1, productId)} />
            </div>
        </>
    );
}