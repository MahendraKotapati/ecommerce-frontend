import { useIsMobile } from "@/customHooks/useIsMobile";
import { Button } from "@/utils/components-shadcn/ui/button";
import { SecondaryText } from "@/utils/Typography";
import { useRouter } from "next/router";

const BRANDS = ["vercase-logo", "zara-logo", "gucci-logo", "prada-logo", "ck-logo"];
const NUMBERS_INFO = [{title: "International Brands", value: "200+"}, 
    {title: "High-Quality Products", value: "2,000+"}, 
    {title: "Happy Customers", value: "30,000+"}
];

export const Banner = () => {

    const router = useRouter();
    const isMobile = useIsMobile();

    const goToCategory = () => {
        router.push(`/category/${'-1'}`);
    };


    return (
    <>
        {!isMobile && <div className="relative">
            <img src="/banner.png" style={{width: "100%"}}></img>
            <div className="absolute top-[100px] left-[100px] max-w-xl">
                <div className="text-6xl font-semibold max-sm:text-3xl">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </div>
                <SecondaryText className="mt-4 max-w-[480px] ">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </SecondaryText>
                <Button className="w-fit h-14 mt-5 py-4 px-12 rounded-full font-normal cursor-pointer bg-brand hover:bg-brand" onClick={goToCategory}> 
                    Shop Now 
                </Button>

                <div className="flex gap-16 mt-8">
                    {NUMBERS_INFO.map((info) => {
                        return (
                            <div key={info.title} className="flex flex-col">
                                <p className="text-4xl max-sm:text-2xl"> {info.value} </p>
                                <p className="text-secondary"> {info.title} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div> }

        {isMobile && <div className="">
            <div className="p-4 pb-0 bg-[#F2F0F1]">
                <div className="text-6xl font-semibold max-sm:text-3xl">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </div>
                <SecondaryText className="text-sm mt-4 max-w-[480px] ">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </SecondaryText>
                <Button className="w-full h-12 mt-5 py-4 px-12 rounded-full font-normal cursor-pointer bg-brand hover:bg-brand" onClick={goToCategory}> 
                    Shop Now 
                </Button>

                <div className="flex gap-4 mt-8 flex-wrap justify-center">
                    {NUMBERS_INFO.map((info) => {
                        return (
                            <div key={info.title} className="flex flex-col items-center">
                                <p className="text-xl"> {info.value} </p>
                                <p className="text-xs text-secondary"> {info.title} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="relative">
                <img src="/banner_mobile.jpg" style={{width: "100%", height: "auto"}}></img>
                <img src="/special_star.svg" className="absolute top-28 left-7 w-11 h-11"></img> 
                <img src="/special_star.svg" className="absolute top-12 right-4 w-[76px] h-[76px]"></img> 
            </div>
            
        </div>}

        <div className={"flex items-center justify-evenly bg-brand py-10 gap-y-2.5 max-sm:flex-wrap max-sm:py-4"}> {/* h-[120px] */}
            {BRANDS.map((brandLogo) => {
                return <img key={brandLogo} src={"/" + brandLogo + ".svg"} alt="Logo" className="max-sm:h-5" />   
            })}
        </div>
    </>
    )
}



