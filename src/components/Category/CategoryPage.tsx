import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Home/Header";
import { DRESS_STYLE, SPECIAL_FILTERS } from "@/utils/Constant";
import { FilterOptions, Filters } from "./Filters";
import { ProductList } from "./ProductList";
import { useRouter } from "next/router";
import { ProductService } from "@/services/product.service";
import { Product } from "@/models/Product";
import { useSearchParams } from "next/navigation";
import { Category } from "@/models/Category";


const filtersInitialState: FilterOptions  = {
    price: { min: 0, max: 0 },
    colors: [],
    sizes: []
}

interface Props {
}

export const CategoryPage = (props: Props) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [category, setcategory] = useState<Category>({} as Category);
    const [title, setTitle] = useState<string>("");
    const [filterOptions, setFilterOptions] = useState(filtersInitialState);
    const [selectedFilters, setSelectedFilters] = useState(filtersInitialState);
    const [isLoading, setLoading] = useState(true);

    const router = useRouter();
    const searchParams = useSearchParams();
    
    const id = +(router.query.id as string);
    const filter = searchParams.get('filter');
    const productService = new ProductService();

    useEffect(() => {
        setLoading(true);

        let products: Product[] = [];
        if (id == -1) {
            setTitle(filter || '');
            if (!filter) {
                products = productService.getAllProducts();
                setTitle("All");
            } else if (filter == SPECIAL_FILTERS.NEW_ARRIVALS) {
                products = productService.getNewArrialProducts();
            } else if (filter == SPECIAL_FILTERS.TOP_SELLING) {
                products = productService.getTopSellingProducts();
            } else if (filter == SPECIAL_FILTERS.ON_SALE) {
                products = productService.getOnSaleProducts();
            } else {
                products = productService.getProductsByDressingStyle(filter as DRESS_STYLE);
            } 
        }
        else {
            products = productService.getProductsByCategory(id);
            const category = productService.getCategory(id)!;
            setcategory(category);
            setTitle(category?.name);
        }

        setProducts(products);
        setFilteredProducts(products);

        let priceMin = Infinity; 
        let priceMax = -1;
        const colors = new Set<string>();
        const sizes = new Set<string>();
        products.forEach((p: Product) => {
            priceMin = Math.min(priceMin, p.discountedPrice ?? p.price); 
            priceMax = Math.max(priceMax, p.discountedPrice ?? p.price); 

            p.variants?.colorVariants.forEach(c => colors.add(c.color));
            p.variants?.sizeVariants.forEach(s => sizes.add(s));
        });

        setFilterOptions({
            price: { min: priceMin, max: priceMax },
            colors: Array.from(colors),
            sizes: Array.from(sizes)
        });

        setSelectedFilters((prev) => {
            return {...prev, price: { min: priceMin, max: priceMax }}
        });
        if (!id) {
            return ;
        }
        setLoading(false);
    }, [id, filter]);


    const applyFilter = () => {
       const filteredProducts = products.filter(p => {
            const price = p.discountedPrice ?? p.price;
            const priceMatch = price >= selectedFilters.price.min && price <= selectedFilters.price.max;
            let colorMatch = false || selectedFilters.colors.length == 0;
            p.variants?.colorVariants.forEach((c) => {
                colorMatch = colorMatch || selectedFilters.colors.includes(c.color);
            });
            let sizeMatch = false || selectedFilters.sizes.length == 0;
            p.variants?.sizeVariants.forEach((s) => {
                sizeMatch = sizeMatch || selectedFilters.sizes.includes(s);
            }); 
            
            return priceMatch && colorMatch && sizeMatch;
       });
        
       setFilteredProducts(filteredProducts);
    }

    return (
        <div className="scrollbar-hidden h-[100vh]">
             <Header />
             <div className="mx-[100px] mt-6 mb-8">
                <div className="flex gap-8">
                    <div className="w-[295px] border border-border rounded-[20px] h-fit"> 
                        {!isLoading && 
                            <Filters  filterOptions={filterOptions}  
                                      setSelectedFilters={setSelectedFilters} 
                                      applyFilter={applyFilter} 
                                      disableFilters={products.length == 0}
                        />}
                    </div>
                    <ProductList products={filteredProducts} title={title} />
                </div>
             </div>
             <Footer />
        </div>
    );
}