import { Product } from "@/models/Product";
import { ProductCard } from "./ProductCard";
import styles from "./Section.module.css";

interface Props {
    sectionData: {title: string, products: Product[]};
}

export const Section = (props: Props) => {
    const {sectionData} = {...props};
    return (
        <div className={styles.section}>
            <div className={styles.title}> {sectionData.title} </div>
            <div className={styles.product_list}>
                {sectionData.products.map((product) => {
                    return (<ProductCard key={product.id}  product={product}></ProductCard>);
                })}
            </div>
        </div>
    );
}