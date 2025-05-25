export interface Cart {
    id: string;
    createdOn: string;
    items: CartItem[];
}

export interface CartItem {
    id: string;
    productName: string;
    price: number;
    sizeVariant: string;
    colorvarinat: string;
    imageUrl: string;
    quantity: number;
}