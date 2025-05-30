import { Review } from "@/components/ReviewCard";
import { Cart } from "@/models/Cart";

export const DYNAMIC_SECTIONS_DATA = [
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

// for Product Page
export const PRODUCTS_LIST = [
    {id: "1", name: "VERTICAL STRIPED SHIRT", description: "VERTICAL STRIPED SHIRT Desc", discountedPrice: 212, price: 232, quatity: 100, imageUrl: "top-selling/P1.png", rating: 5},
    {id: "2", name: "COURAGE GRAPHIC T-SHIRT", description: "COURAGE GRAPHIC T-SHIRT Desc", price: 145, quatity: 100, imageUrl: "top-selling/P2.png", rating: 4},
    {id: "3", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quatity: 100, imageUrl: "top-selling/P3.png", rating: 3},
    {id: "4", name: "FADED SKINNY JEANS", description: "FADED SKINNY JEANS Desc", price: 210, quatity: 100, imageUrl: "top-selling/P4.png", rating: 4.5},
    {id: "5", name: "Gradient Graphic T-shirt", description: "VERTICAL STRIPED SHIRT Desc", discountedPrice: 212, price: 232, quatity: 100, imageUrl: "top-selling/P1.png", rating: 5},
    {id: "6", name: "Polo with Tipping Details", description: "COURAGE GRAPHIC T-SHIRT Desc", price: 145, quatity: 100, imageUrl: "top-selling/P2.png", rating: 4},
    {id: "7", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quatity: 100, imageUrl: "top-selling/P3.png", rating: 3},
    {id: "8", name: "Black Striped T-shirt", description: "FADED SKINNY JEANS Desc", price: 210, quatity: 100, imageUrl: "top-selling/P4.png", rating: 4.5},
    {id: "9", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quatity: 100, imageUrl: "top-selling/P3.png", rating: 3},
    {id: "10", name: "Black Striped T-shirt", description: "FADED SKINNY JEANS Desc", price: 210, quatity: 100, imageUrl: "top-selling/P4.png", rating: 4.5},
    {id: "11", name: "LOOSE FIT BERMUDA SHORTS", description: "LOOSE FIT BERMUDA SHORTS Desc", price: 80, quatity: 100, imageUrl: "top-selling/P3.png", rating: 3},
    {id: "12", name: "Black Striped T-shirt", description: "FADED SKINNY JEANS Desc", price: 210, quatity: 100, imageUrl: "top-selling/P4.png", rating: 4.5}
];

export const CATEGORIES_LIST = [{id: 1, name: 't-shirts'}, {id: 2, name: 'shorts'}, {id: 3, name: 'shirts'}, {id: 4, name: 'hoodie'}, {id: 5, name: 'jeans'}]

export const REVIEWS_LIST: Review[] = [
    {
        id: "1",
        name: "Sarah M.", 
        reviewText: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        postedDate: new Date(2024, 0, 14).toDateString(),
        rating: 5
    },
    {
        id: "2",
        name: "Alex K.", 
        reviewText: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        postedDate: new Date(2024, 3, 11).toDateString(),
        rating: 4.3
    },
    {
        id: "3",
        name: "James L.", 
        reviewText: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        postedDate: new Date(2024, 5, 4).toDateString(),
        rating: 3.8
    },
    {
        id: "4",
        name: "Rober T.", 
        reviewText: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        postedDate: new Date(2024, 12, 28).toDateString(),
        rating: 3,
    },
    {
        id: "5",
        name: "Julian W.", 
        reviewText: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        postedDate: new Date(2025, 3, 28).toDateString(),
        rating: 2
    }
];

export const DATA_CART: Cart = {
    id: "112",
    createdOn: "2025-05-25",
    items: [
        {id: "1", productName: "VERTICAL STRIPED SHIRT", price: 212, sizeVariant: 'Small', colorvarinat: 'red', imageUrl: "top-selling/P1.png", quantity: 1 },
        {id: "2", productName: "FADED SKINNY JEANS", price: 210, sizeVariant: 'Medium', colorvarinat: 'yellow', imageUrl: "top-selling/P4.png", quantity: 1  },
        {id: "3", productName: "LOOSE FIT BERMUDA SHORTS", price: 80, sizeVariant: 'Small', colorvarinat: 'black', imageUrl: "top-selling/P3.png", quantity: 1  }
    ]
}