import { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Home/Header";
import { ProductCard } from "../Home/ProductCard";
import { PRODUCTS_LIST } from "@/utils/Constant";
import { Filters } from "./Filters";
import { ProductList } from "./ProductList";

interface Props {
    id: string;
}

export const Category = (props: Props) => {

    const [products, setProducts] = useState(PRODUCTS_LIST);

    return (
        <div className="scrollbar-hidden h-[100vh]">
             <Header />
             <div className="mx-[100px] mt-6 mb-8">
                <div className="flex gap-8">
                    <div className="w-[295px] border border-border rounded-[20px] h-fit"> 
                        <Filters />
                    </div>
                    <ProductList products={products} title={"All"} />
                </div>
             </div>
             <Footer />
        </div>
    );
}