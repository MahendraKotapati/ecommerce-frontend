import { Product } from "@/models/Product";
import { ProductCard } from "./ProductCard";
import styles from "./Section.module.css";

interface Props {
    isLast: boolean;
    hideViewAllBtn?: boolean;
    sectionData: {title: string, products: Product[]};
    customStyles?: string;
}

export const Section = (props: Props) => {
    const {sectionData} = {...props};
    return (
        <div className={`mt-16 mx-[110px] flex flex-col items-center ${props.customStyles}`}>
            <div className={"mb-8 uppercase " + styles.title}> {sectionData.title} </div>
            <div className="flex gap-4">
                {sectionData.products.map((product) => {
                    return (<ProductCard key={product.id}  product={product}></ProductCard>);
                })}
            </div>
            {!props.hideViewAllBtn &&
                <div className="mt-8 mb-12 border border-border rounded-full py-4 px-12 w-52 flex justify-center cursor-pointer"> 
                        View All 
                </div>
            }
            {!props.isLast && <hr className="border-border w-[100%]" />}
        </div>
    );
}