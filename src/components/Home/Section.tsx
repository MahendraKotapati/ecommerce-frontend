import { Product } from "@/models/Product";
import { ProductCard } from "./ProductCard";
import { Button } from "@/utils/components-shadcn/ui/button";
import { useRouter } from "next/router";
import { SectionModel } from "./Home";

interface Props {
    isLast: boolean;
    hideViewAllBtn?: boolean;
    sectionData: SectionModel;
    customStyles?: string;
}

export const Section = (props: Props) => {
    const {sectionData} = {...props};

    const router = useRouter();
    
    const goToPage = (url: string) => {
        router.push(url);
    };

    return (
        <div className={`mt-16 mx-[110px] flex flex-col items-center ${props.customStyles}`}>
            <div className={"mb-8 uppercase text-5xl font-semibold"}> {sectionData.title} </div>
            <div className="flex gap-4">
                {sectionData.products.map((product) => {
                    return (<ProductCard key={product.id}  product={product}></ProductCard>);
                })}
            </div>
            {!props.hideViewAllBtn &&
                <Button 
                    onClick={() => goToPage(`/category/-1?filter=${sectionData.filterName}`)}
                    className="mt-8 mb-12 py-4 px-12 border border-brand text-black rounded-full bg-white h-12 w-52 hover:bg-brand hover:text-white cursor-pointer" variant={"outline"}> 
                    View All 
                </Button>
            }
            {!props.isLast && <hr className="border-border w-[100%]" />}
        </div>
    );
}