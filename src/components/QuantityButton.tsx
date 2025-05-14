import { Button } from "@/utils/components-shadcn/ui/button";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

interface Props {
    quantity: number;
    setQuantity: (quantity: any) => void;
    customStyles?: string;
}

export const QuantityButton = (props: Props) => {
    const {quantity, setQuantity, customStyles} = {...props};

    const updateQuantity = (change: number) => {
        if (quantity + change < 0)
            return;
        setQuantity((quantity: number) => quantity + change);
    }

    return (
        <>
            <div className={` ${quantity == 0 ? 'hidden' : ''} flex-1 flex items-center rounded-full justify-between bg-border py-1.5 px-3`}> 
                <FaMinus className="h-5 w-5 cursor-pointer" onClick={() => updateQuantity(-1)} />
                <div>{quantity}</div>
                <FaPlus className="h-5 w-5 cursor-pointer" onClick={() => updateQuantity(1)} />
            </div>
        </>
    );
}