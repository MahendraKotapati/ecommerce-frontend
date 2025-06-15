import { Product } from "@/models/Product";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Section } from "./Section";
import { DressStyleGrid } from "./DressStyleGrid";
import { Footer } from "../Footer";
import { ReviewList } from "./ReviewList";
import { SPECIAL_FILTERS } from "@/utils/Constant";
import { useEffect, useState } from "react";
import { ProductService } from "@/services/product.service";

export const BRAND_NAME = "FitIn";

export interface SectionModel {
    title: string, 
    filterName?: SPECIAL_FILTERS, 
    products: Product[]
}

export const Home = () => {
    const [dynamicSections, setDynamicSections] = useState<SectionModel[]>([]);
    const productService = new ProductService();

    useEffect(() => {
        const dynamicSections = productService.getDynamicSections();
        setDynamicSections(dynamicSections);
    }, []);

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            {
                dynamicSections.map((sectionData, index) => {
                    return (<Section key={sectionData.title} isLast={index==dynamicSections.length-1} sectionData={sectionData} />)
                })
            }
            <DressStyleGrid />
            <ReviewList></ReviewList>
            <Footer />
        </>
    );
}