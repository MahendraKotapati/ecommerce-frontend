import { Product } from "@/models/Product";
import { PRODUCTS_LIST } from "@/utils/Constant";

export class ProductService {


    getProduct(id: string): Product {
        return PRODUCTS_LIST.filter(p => p.id == id)[0];
    }
}