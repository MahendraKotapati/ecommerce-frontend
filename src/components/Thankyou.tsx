import { SecondaryText } from "@/utils/Typography";
import { Footer } from "./Footer";
import { Header } from "./Home/Header";
import { FaCircleCheck } from "react-icons/fa6";

export const Thankyou = () => {
    return (
        <>
            <div className="mx-[100px] mt-4 flex flex-col mb-18 max-sm:mx-4">
                <Header customStyles="!py-3 !px-0 !mx-0 !mt-0" /> 
                <div className="flex flex-col justify-center items-center h-[calc(100vh-440px)]">
                    <FaCircleCheck className="w-20 h-20 text-green-800" />
                    <p className="text-4xl font-semibold mt-4"> Thank you </p>
                    <SecondaryText className="mt-2"> We have received your Order </SecondaryText>
                </div>
            </div>
            <Footer />
        </>
    );
}