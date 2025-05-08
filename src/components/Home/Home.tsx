import { Product } from "@/models/Product";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Section } from "./Section";
import { DressStyleGrid } from "./DressStyleGrid";
import { Footer } from "../Footer";
import { ReviewList } from "./ReviewList";
import { DYNAMIC_SECTIONS_DATA } from "@/utils/Constant";

export const BRAND_NAME = "SPEND";

export const Home = () => {

    const dynamicSections: {title: string, products: Product[] }[] = DYNAMIC_SECTIONS_DATA;

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