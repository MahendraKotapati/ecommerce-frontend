import { Product } from "@/models/Product";
import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { ReviewList } from "./ReviewLis";

interface Props {
    id: string;
}

export const ProductDetail = (props: Props) => {

    const [product, setProduct] = useState<Product>({} as Product);

    useEffect(() => {

    }, [props.id]);

    return (
    <>
        <ReviewList></ReviewList>
        <Footer />
    </>
    );
}