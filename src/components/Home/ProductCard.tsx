import { Product } from "@/models/Product";
import styles from "./productCard.module.css";

interface Props {
    product: Product;
}

export const ProductCard = (props: Props) => {
    const {id, name, description, discountedPrice, price, imageUrl, rating} = {...props.product};
    return (
    <div>
        <img src={"/"+ imageUrl} className={styles.image}></img>
        <p>
            {name}
        </p>
        <p>
            {discountedPrice ?? price}
        </p>
    </div>)
}