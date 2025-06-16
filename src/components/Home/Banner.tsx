import { Button } from "@/utils/components-shadcn/ui/button";
import { SecondaryText } from "@/utils/Typography";
import { useRouter } from "next/router";

const BRANDS = ["prada-logo", "ck-logo", "gucci-logo", "vercase-logo", "zara-logo"];
const NUMBERS_INFO = [{title: "International Brands", value: "200+"}, 
    {title: "High-Quality Products", value: "2,000+"}, 
    {title: "Happy Customers", value: "30,000+"}
];

export const Banner = () => {

    const router = useRouter();

    const goToCategory = () => {
        router.push(`/category/${'-1'}`);
    };


    return (
    <>
        <div className="relative">
            <img src="/banner.png" style={{width: "100%"}}></img>
            <div className="absolute top-[100px] left-[100px] max-w-xl">
                <div className="text-6xl font-semibold">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </div>
                <SecondaryText className="mt-4 max-w-[480px]">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </SecondaryText>
                <Button className="w-fit h-14 mt-5 py-4 px-12 rounded-full font-normal cursor-pointer bg-brand hover:bg-brand" onClick={goToCategory}> 
                    Shop Now 
                </Button>

                <div className="flex gap-16 mt-8">
                    {NUMBERS_INFO.map((info) => {
                        return (
                            <div className="flex flex-col">
                                <p className="text-4xl"> {info.value} </p>
                                <p className="text-secondary"> {info.title} </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className={"flex items-center justify-evenly bg-brand h-[120px]"}>
            {BRANDS.map((brandLogo) => {
                return <img key={brandLogo} src={"/" + brandLogo + ".svg"} alt="Logo" />   
            })}
        </div>
    </>
    )
}