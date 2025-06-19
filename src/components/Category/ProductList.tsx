import { Product } from "@/models/Product";
import { ProductCard } from "../Home/ProductCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/utils/components-shadcn/ui/pagination";
import { useEffect, useState } from "react";
import { SecondaryText } from "@/utils/Typography";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/utils/components-shadcn/ui/select";

interface Props {
    products: Product[];
    title: string;
}

enum SORT_OPTIONS {
    MOST_POPULAR = 'Most Popular',
    PRICE_LOW = 'Price Low',
    PRICE_HIGH = 'Price High',
}

const PAGE_SIZE = 9;

const MOST_POPULAR_CUSTOM_SORT = (p1: Product, p2: Product) => (p2.rating || 0) - (p1.rating || 0);
const PRICE_LOW_CUSTOM_SORT = (p1: Product, p2: Product) => (p1.discountedPrice ?? p1.price) - (p2.discountedPrice ?? p2.price);
const PRICE_HIGH_CUSTOM_SORT = (p1: Product, p2: Product) => (p2.discountedPrice ?? p2.price) - (p1.discountedPrice ?? p1.price);


export const ProductList = (props: Props) => {

    const {title} = {...props};
    const [products, setProducts] = useState(props.products);
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(0);
    const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS.MOST_POPULAR);


    useEffect(() => {
        setCurrentProducts(products.slice(page*PAGE_SIZE, page*PAGE_SIZE+PAGE_SIZE));
    }, [page]);

    useEffect(() => {
        let products: Product[] = [];

        if (selectedSort == SORT_OPTIONS.MOST_POPULAR)
            products = props.products.sort(MOST_POPULAR_CUSTOM_SORT);
        else if (selectedSort == SORT_OPTIONS.PRICE_LOW)
            products = props.products.sort(PRICE_LOW_CUSTOM_SORT);
        else if (selectedSort == SORT_OPTIONS.PRICE_HIGH)
            products = props.products.sort(PRICE_HIGH_CUSTOM_SORT);

        setProducts(products);

        setCurrentProducts(products.slice(page*PAGE_SIZE, page*PAGE_SIZE+PAGE_SIZE));
    }, [props.products, selectedSort]);

    const updatePageSize = (change: number) => {
        if ((page + change < 0) || (page + change >= Math.ceil(products.length/PAGE_SIZE)))
            return ;
        setPage(page+change);
    }

    return (    
        <div className="flex flex-col justify-between">
            <div className="flex flex-col"> 
                <div className="flex justify-between mb-2">
                    <p className="text-3xl font-semibold capitalize"> {title} </p>
                    {products.length > 0 &&<div className="flex items-center"> 
                        <SecondaryText> 
                            Showing {page*PAGE_SIZE+1 + "-" + (Math.min(page*PAGE_SIZE+PAGE_SIZE, products.length))} of {products.length} Products  
                        </SecondaryText>
                        <SecondaryText className="ml-2"> Sort by: </SecondaryText>
                        <Select onValueChange={(value: SORT_OPTIONS) => setSelectedSort(value)}>
                            <SelectTrigger className="cursor-pointer border-0 shadow-none !text-brand !font-semibold" iconClassName="!text-brand !opacity-100">
                                <span> {selectedSort} </span>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {Object.values(SORT_OPTIONS).map((option) => {
                                        return (<SelectItem key={option} value={option}>{option}</SelectItem>)
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>}
                    
                </div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                    {currentProducts.map((product) => {
                        return (<ProductCard key={product.id}  product={product} customStyles={"!w-[280px] !h-[280px]"}></ProductCard>);
                    })}
                </div>
                { products.length == 0 &&
                    <div>
                        No Products found
                    </div>
                }
            </div>
            {products.length > 0 && <div> 
                <hr className="border-border my-4" /> 
                <div className="mt-auto">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem onClick={() => updatePageSize(-1)}>
                                <PaginationPrevious />
                            </PaginationItem>
                            {
                                new Array(Math.ceil(products.length/PAGE_SIZE)).fill(0).map((a, index) => {
                                    return (
                                    <PaginationItem key={index} onClick={() => setPage(index)}>
                                        <PaginationLink href="#" isActive={page==index}>
                                            {index+1}
                                        </PaginationLink>
                                    </PaginationItem>)
                                })
                            }
                            <PaginationItem onClick={() => updatePageSize(1)}>
                                <PaginationNext />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>}
        </div>
    );
}