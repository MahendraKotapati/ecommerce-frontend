import { Product } from "@/models/Product";
import { CATEGORIES_LIST, DRESS_STYLE, PRODUCTS_LIST } from "@/utils/Constant";

export class ProductService {

    getAllProducts(): Product[] {
        return PRODUCTS_LIST;
    }

    getProductsByCategory(categoryId: number) {
        return PRODUCTS_LIST.filter(p => p.categoryId == categoryId);
    }

    getNewArrialProducts() {
        return PRODUCTS_LIST.filter(p => p.isNew);
    }

    getTopSellingProducts() {
        return PRODUCTS_LIST;
    }

    getProductsByDressingStyle(dressStyle: DRESS_STYLE) {
        const categories = CATEGORIES_LIST.filter((c) => c.dressStyle == dressStyle);
        let products: Product[] = [];
        categories.forEach((c) => {
            products = [...products, ...this.getProductsByCategory(c.id)];
        });
        return products;
    }

    getProduct(id: string): Product {
        return PRODUCTS_LIST.filter(p => p.id == id)[0];
    }

    getCategory(id: number) {
        return CATEGORIES_LIST.find(c => c.id == id);
    }
}