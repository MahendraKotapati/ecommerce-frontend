import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Home/Header";
import { ProductCard } from "../Home/ProductCard";
import { DRESS_STYLE, PRODUCTS_LIST, SPECIAL_FILTERS } from "@/utils/Constant";
import { Filters } from "./Filters";
import { ProductList } from "./ProductList";
import { useRouter } from "next/router";
import { ProductService } from "@/services/product.service";
import { Product } from "@/models/Product";
import { useSearchParams } from "next/navigation";
import { Category } from "@/models/Category";

interface Props {
}

export const CategoryPage = (props: Props) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [category, setcategory] = useState<Category>({} as Category);
    const [title, setTitle] = useState<string>("");

    const router = useRouter();
    const searchParams = useSearchParams();
    
    const id = +(router.query.id as string);
    const filter = searchParams.get('filter');
    const productService = new ProductService();

    useEffect(() => {
        let products: Product[] = [];
        if (id == -1) {
            setTitle(filter || '');
            if (!filter) {
                products = productService.getAllProducts();
                setTitle("All");
            } else if (filter == SPECIAL_FILTERS.NEW_ARRIVALS) {
                products = productService.getNewArrialProducts();
            } else if (filter == SPECIAL_FILTERS.TOP_SELLING) {
                products = productService.getTopSellingProducts();
            } else {
                products = productService.getProductsByDressingStyle(filter as DRESS_STYLE);
            } 
        }
        else {
            products = productService.getProductsByCategory(id);
            const category = productService.getCategory(id)!;
            setcategory(category);
            setTitle(category?.name);
        }

        setProducts(products);

    }, [id]);

    return (
        <div className="scrollbar-hidden h-[100vh]">
             <Header />
             <div className="mx-[100px] mt-6 mb-8">
                <div className="flex gap-8">
                    <div className="w-[295px] border border-border rounded-[20px] h-fit"> 
                        <Filters />
                    </div>
                    <ProductList products={products} title={title} />
                </div>
             </div>
             <Footer />
        </div>
    );
}