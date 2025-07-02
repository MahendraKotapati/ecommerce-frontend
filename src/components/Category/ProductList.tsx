import { Product } from "@/models/Product";
import { ProductCard } from "../Home/ProductCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/utils/components-shadcn/ui/pagination";
import { useEffect, useRef, useState } from "react";
import { SecondaryText } from "@/utils/Typography";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/utils/components-shadcn/ui/select";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/utils/components-shadcn/ui/drawer";
import { FilterOptions, Filters } from "./Filters";
import { FaXmark } from "react-icons/fa6";
import { useIsMobile } from "@/customHooks/useIsMobile";


interface Props {
    products: Product[];
    title: string;
    // below are required for filters
    filterOptions: FilterOptions,
    setSelectedFilters: (filterOptions: FilterOptions) => void;
    applyFilter: () => void;
    disableFilters: boolean;
    isLoading: boolean;
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

    const {title, filterOptions, setSelectedFilters, applyFilter, disableFilters, isLoading} = {...props};
    const [products, setProducts] = useState(props.products);
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(0);
    const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS.MOST_POPULAR);
    const filterCloseRef = useRef<any>(null);
    const isMobile = useIsMobile();


    useEffect(() => {
        setCurrentProducts(products.slice(page*PAGE_SIZE, page*PAGE_SIZE+PAGE_SIZE));
    }, [page]);

    useEffect(() => {
        setPage(0);        
    }, [props.products]);

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

    const closeFilters = () => {
        filterCloseRef.current.click();
    }

    return (
        <> 
            <div className="w-[295px] border border-border rounded-[20px] h-fit max-sm:hidden"> 
                {!isLoading && 
                    <Filters  filterOptions={filterOptions}  
                            setSelectedFilters={setSelectedFilters} 
                            applyFilter={applyFilter} 
                            disableFilters={disableFilters}
                        closeFilters={() => {}}
                />}
            </div>
            <div className="flex flex-col justify-between max-sm:w-full">
                <div className="flex flex-col"> 
                    <div className="flex justify-between mb-2">
                        <p className="text-3xl font-semibold capitalize max-sm:text-xl"> {title} </p>
                        <div className="flex items-center"> 
                            {products.length > 0 && !isMobile && 
                                <>
                                    <SecondaryText className="max-sm:hidden"> 
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
                                </>
                            }
                            
                            <Drawer>
                                <DrawerTrigger>
                                    <div className="p-2 rounded-full bg-border hidden max-sm:block">
                                        <img src="/filter.svg" className="h-4 w-4" />
                                    </div>
                                </DrawerTrigger>
                                <DrawerContent className="!rounded-t-[20px]">
                                    <div className="overflow-scroll"> 
                                        <DrawerHeader className="pb-0 px-6">
                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold text-xl">Filters</p>
                                                <FaXmark onClick={closeFilters} className="h-5.5 w-5.5 cursor-pointer font-normal text-black opacity-40" />
                                            </div>
                                        </DrawerHeader>
                                        {
                                            !isLoading && 
                                                <Filters  filterOptions={filterOptions}  
                                                    setSelectedFilters={setSelectedFilters} 
                                                    applyFilter={applyFilter} 
                                                    disableFilters={disableFilters} 
                                                    closeFilters={closeFilters} />
                                        }
                                    </div>
                                    <DrawerClose>
                                        <span ref={filterCloseRef}> </span>
                                    </DrawerClose>
                                </DrawerContent>
                                
                            </Drawer>
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-3 max-sm:grid-cols-2">
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
                                <PaginationItem className={`${(page-1 >= 0) ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={() => updatePageSize(-1)}>
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
                                <PaginationItem className={`${(page+1 < Math.ceil(products.length/PAGE_SIZE)) ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={() => updatePageSize(1)}>
                                    <PaginationNext />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>}
            </div>
        </>
    );
}