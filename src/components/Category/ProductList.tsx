import { Product } from "@/models/Product";
import { ProductCard } from "../Home/ProductCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/utils/components-shadcn/ui/pagination";
import { useEffect, useState } from "react";
import { SecondaryText } from "@/utils/Typography";

interface Props {
    products: Product[];
    title: string;
}

const PAGE_SIZE = 9;

export const ProductList = (props: Props) => {

    const {products, title} = {...props};
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        setCurrentProducts(products.slice(page*PAGE_SIZE, page*PAGE_SIZE+PAGE_SIZE));
    }, [page]);

    useEffect(() => {
        setCurrentProducts(products.slice(page*PAGE_SIZE, page*PAGE_SIZE+PAGE_SIZE));
    }, [products]);

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
                    <div className="flex gap-2"> 
                        <SecondaryText> Showing {page*PAGE_SIZE+1 + "-" + (Math.min(page*PAGE_SIZE+PAGE_SIZE, products.length))} of {products.length} Products  </SecondaryText>
                        <div> Sort by: Most Popular </div>
                    </div>
                    
                </div>
                <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                    {currentProducts.map((product) => {
                        return (<ProductCard key={product.id}  product={product} customStyles={"!w-[280px] !h-[280px]"}></ProductCard>);
                    })}
                </div>
            </div>
            <div> 
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
                                    <PaginationItem onClick={() => setPage(index)}>
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
            </div>
        </div>
    );
}