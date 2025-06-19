import { Product } from "@/models/Product";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../Footer";
import { ReviewList } from "./ReviewLis";
import { Section } from "../Home/Section";
import { PRODUCTS_LIST } from "@/utils/Constant";
import { ProductBuyPanel } from "./ProductBuyPanel";
import { Header } from "../Home/Header";
import { ProductService } from "@/services/product.service";
import { useRouter } from "next/router";

enum TAB {
    PRODUCT_DETAILS = 'Product Details',
    REVIEWS = 'Reviews',
    FAQS = 'FAQs'
}

const TAB_LIST = Object.values(TAB);

export const ProductDetail = () => {

    const [product, setProduct] = useState<Product>({} as Product);
    const [selectedTab, setSelectedTab] = useState(TAB.REVIEWS);
    const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();
    const id = router.query.id as string;

    const productService = new ProductService();

    useEffect(() => {
        setLoading(true);
        const p = productService.getProduct(id);
        if (!p) 
            return ;
        setProduct(p);

        let suggestedProducts = productService.getProductsByCategory(p.categoryId);
        suggestedProducts = suggestedProducts.filter(p => p.id != id);
        setSuggestedProducts(suggestedProducts);

        setLoading(false);
    }, [id]);

    return (
        <>  
            <Header />
            {!isLoading && <ProductBuyPanel product={product}/>}

            <div className="mx-[108px]"> 
                <div className="flex w-full text-center"> 
                    {
                        TAB_LIST.map((tab) => {
                            return <div className={`flex-1 py-3 border-b cursor-pointer text-base 
                                        ${(selectedTab == tab ? ' border-b-2 border-foreground' : ' border-border text-secondary')}`} 
                                        key={tab}
                                        onClick={() => setSelectedTab(tab)}
                                    > 
                                        {tab} 
                                    </div>
                        })
                    }
                </div>
                {selectedTab == TAB.PRODUCT_DETAILS &&  <div className="mt-3"> Product Details here </div>}
                {selectedTab == TAB.REVIEWS &&  <ReviewList></ReviewList>}
                {selectedTab == TAB.FAQS &&  <div className="mt-3"> FAQs here </div>}
            </div>

            <Section 
                sectionData={{title: "You might also like", products: suggestedProducts}} 
                isLast={true}
                hideViewAllBtn={true}
                customStyles="mb-18"
            />
            <Footer />
        </>
    );
}