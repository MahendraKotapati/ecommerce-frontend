import { Product } from "@/models/Product";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Section } from "./Section";
import { DressStyleGrid } from "./DressStyleGrid";

const dynamicSections: {title: string, products: Product[] }[] = [
    {   
        title: "NEW ARRIVALS", 
        products: [
            {id: "1", name: "T-SHIRT WITH TAPE DETAILS", description: "T-SHIRT Desc", price: 120, quatity: 100, imageUrl: "new-arrivals/P1.png", rating: 4},
            {id: "2", name: "SKINNY FIT JEANS", description: "SKINNY FIT JEANS Desc", discountedPrice: 240, price: 260, quatity: 100, imageUrl: "new-arrivals/P2.png", rating: 4.5},
            {id: "3", name: "CHECKERED SHIRT", description: "CHECKERED SHIRT Desc", price: 180, quatity: 100, imageUrl: "new-arrivals/P3.png", rating: 5},
            {id: "4", name: "SLEEVE STRIPED T-SHIRT", description: "SLEEVE STRIPED T-SHIRT Desc", discountedPrice: 130, price: 160, quatity: 100, imageUrl: "new-arrivals/P4.png", rating: 3}
        ]
    }, 
    { 
        title: "TOP SELLING", 
        products: [
            {id: "1", name: "VERTICAL STRIPED SHIRT", description: "VERTICAL STRIPED SHIRT Desc", discountedPrice: 212, price: 232, quatity: 100, imageUrl: "top-selling/P1.png", rating: 5},
            {id: "2", name: "COURAGE GRAPHIC T-SHIRT", description: "COURAGE GRAPHIC T-SHIRT Desc", price: 145, quatity: 100, imageUrl: "top-selling/P2.png", rating: 4},
            {id: "3", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quatity: 100, imageUrl: "top-selling/P3.png", rating: 3},
            {id: "4", name: "FADED SKINNY JEANS", description: "FADED SKINNY JEANS Desc", price: 210, quatity: 100, imageUrl: "top-selling/P4.png", rating: 4.5}
        ]
    }
];


export const Home = () => {

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            {
                dynamicSections.map((sectionData) => {
                    return (<Section key={sectionData.title} sectionData={sectionData} />)
                })
            }

            {/* <DressStyleGrid /> */}
        </>
    );
}