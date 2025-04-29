export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discountedPrice?: number;
    quatity: number;
    imageUrl: string;
    rating?: number;
}