import { CATEGORIES_LIST } from "@/utils/Constant";
import { useEffect, useState } from "react";
import { FiSliders } from "react-icons/fi";
import { FaChevronDown, FaChevronUp, FaChevronRight, FaCheck } from "react-icons/fa6";

import * as Slider from "@radix-ui/react-slider";
import { Button } from "@/utils/components-shadcn/ui/button";
import { useRouter } from "next/router";


export interface FilterOptions {
    price: { min: number, max: number },
    colors: string[],
    sizes: string[]
}

interface Props {
    filterOptions: FilterOptions,
    setSelectedFilters: (filterOptions: FilterOptions) => void;
    applyFilter: () => void;
    disableFilters: boolean;
}

export const Filters = (props: Props) => {

    const {filterOptions, setSelectedFilters, applyFilter, disableFilters} = {...props};
    const [categories, setCategories] = useState(CATEGORIES_LIST);
    const [price, setPrice] = useState<number[]>([filterOptions.price.min, filterOptions.price.max]);
    const [filtersOpenState, setFilterOpenState] = useState({price: true, color: true, size: true});
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const router = useRouter();

    const colorBgMap: {[color: string] : string} = {};

    filterOptions.colors.map((color) => {
        colorBgMap[color] = `bg-${color}-700`;
    });

    useEffect(() => {
        setSelectedFilters({
            price: {min: price[0], max: price[1]},
            colors: selectedColors,
            sizes: selectedSizes
        });
    }, [selectedColors, selectedSizes, price]);

    // might need to have individual min, max useState
    useEffect(() => {
        setPrice([filterOptions.price.min, filterOptions.price.max]);
    }, [filterOptions]);

    useEffect(() => {
        if (disableFilters)
            setFilterOpenState({price: false, color: false, size: false});
        else {
            setFilterOpenState({price: true, color: true, size: true});
        }
    }, [disableFilters]);



    const toggleFilter = (filterName: string) => {
        if (disableFilters) {
            return ;
        }
        setFilterOpenState((filter: any) => {
            return {...filter, [filterName]: !filter[filterName]};
        });
    }

    const selectColor = (color: string) => {
        if (selectedColors.includes(color)) {
            setSelectedColors((selectedColors) => {
                return selectedColors.filter(c => c != color);
            });
        } else {
            setSelectedColors((selectedColors) => {
                return [...selectedColors, color];
            });
        }
    }

    const selectSize = (size: string) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes((selectedSizes) => {
                return selectedSizes.filter(s => s != size);
            });
        } else {
            setSelectedSizes((selectedSizes) => {
                return [...selectedSizes, size];
            });
        }
    }

    const goToCategory = (id: number) => {
        router.push(`/category/${id}`);
    };

    return (
        <div className="py-5 px-6">

            <div className="flex justify-between items-center">
                <p className="text-base font-semibold"> Filters </p>
                <FiSliders className='h-4 w-4' />
            </div>

            <hr className="border-border my-4" />

            <div className="flex flex-col gap-2">
                {
                    categories.map((category) => {
                        return (
                            <div key={category.id} className="flex justify-between items-center cursor-pointer" onClick={() => goToCategory(category.id)}>
                                <p className="text-base text-secondary capitalize"> {category.name} </p>
                                <FaChevronRight className='h-4 w-4 text-secondary' />
                            </div>
                        )
                    })
                }
            </div>

            <hr className="border-border my-4" />
            
            <div>
                <div className={`flex justify-between items-center ${disableFilters ? 'text-secondary cursor-not-allowed ' : 'cursor-pointer ' }`} onClick={() => toggleFilter('price')}>
                    <p className={`text-base font-semibold`}> Price </p>
                    {filtersOpenState.price && <FaChevronUp className='h-4 w-4' />}
                    {!filtersOpenState.price && <FaChevronDown className='h-4 w-4' />}
                </div>
               {filtersOpenState.price && <div className="mt-6">
                    <Slider.Root
                        className="relative flex w-full touch-none select-none items-center"
                        min={filterOptions.price.min}
                        max={filterOptions.price.max}
                        step={1}
                        minStepsBetweenThumbs={1}
                        value={[price[0], price[1]]}
                        onValueChange={(value) => setPrice(value)}
                    >
                        <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-muted">
                            <Slider.Range className="absolute h-full bg-primary" />
                        </Slider.Track>
                        <Slider.Thumb className="relative block h-5 w-5 rounded-full border-2 border-primary bg-primary shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50"> 
                            <p className="absolute top-5 -left-1 text-sm font-semibold"> {'$'+ price[0]} </p>
                        </Slider.Thumb>
                        <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-primary shadow transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            <p className="absolute top-5 -left-1 text-sm font-semibold"> {'$'+ price[1]} </p>
                        </Slider.Thumb>
                    </Slider.Root>
                </div>}
            </div>

            <hr className={`border-border my-4 ${filtersOpenState.price ? 'mt-10' : ''}`} />

            <div>
                <div onClick={() => toggleFilter('color')} className={`flex justify-between items-center ${disableFilters ? 'text-secondary cursor-not-allowed ' : 'cursor-pointer ' }`}>
                    <p className="text-base font-semibold"> Colors </p>
                    {filtersOpenState.color && <FaChevronUp className='h-4 w-4' />}
                    {!filtersOpenState.color && <FaChevronDown className='h-4 w-4' />}
                </div>

                {
                    filtersOpenState.color && <div className="flex flex-wrap gap-4 mt-6">
                        {
                            Object.keys(colorBgMap).map((color) => {
                                    return (
                                        <div 
                                            key={color}
                                            className={`relative h-9 w-9 rounded-full flex items-center justify-center border border-border cursor-pointer`}
                                            style={{backgroundColor: color}}
                                            onClick={() => selectColor(color)}
                                        >
                                            {selectedColors.includes(color) && <span className="absolute"> 
                                                <FaCheck className="h-4 w-4" color="#ffff"/> 
                                            </span>}
                                        </div>
                                    );
                            })
                        }
                    </div>
                }
            </div>


            <hr className="border-border my-4" />

            <div>
                <div onClick={() => toggleFilter('size')} className={`flex justify-between items-center ${disableFilters ? 'text-secondary cursor-not-allowed ' : 'cursor-pointer ' }`}>
                    <p className="text-base font-semibold"> Size </p>
                    {filtersOpenState.size && <FaChevronUp className='h-4 w-4' />}
                    {!filtersOpenState.size && <FaChevronDown className='h-4 w-4' />}
                </div>

                {
                    filtersOpenState.size &&
                        <div className="flex gap-3 mt-6 flex-wrap">
                            {
                                filterOptions.sizes.map((size) => {
                                    return (
                                        <Button 
                                            key={size}
                                            onClick={() => selectSize(size)}
                                            className={`capitalize cursor-pointer rounded-full
                                                        ${(selectedSizes.includes(size)) ? 'bg-brand hover:bg-brand' : ' bg-border text-secondary hover:bg-border hover:text-secondary'}`}> 
                                            {size} 
                                        </Button>
                                    );
                                })
                            }
                        </div>
                    
                }
            </div>

            <Button className="w-full h-[44px] rounded-full mt-6 cursor-pointer bg-brand hover:bg-brand" onClick={applyFilter}> 
                Apply Filter 
            </Button>

        </div>
    );
}