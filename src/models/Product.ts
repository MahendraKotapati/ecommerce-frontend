export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discountedPrice?: number;
    quantity: number;
    rating?: number;

    variants?: {
        colorVariants: { color: string, images: string[] }[];
        sizeVariants: string[];
    };

    categoryId: number;
    isNew?: boolean;
    onSale?: boolean;
}