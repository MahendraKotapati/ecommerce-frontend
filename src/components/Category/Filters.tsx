import { CATEGORIES_LIST } from "@/utils/Constant";
import { useState } from "react";
import { FiSliders } from "react-icons/fi";
import { FaChevronDown, FaChevronUp, FaChevronRight, FaCheck } from "react-icons/fa6";

import * as Slider from "@radix-ui/react-slider";
import { Button } from "@/utils/components-shadcn/ui/button";
import { useRouter } from "next/router";


export const Filters = () => {

    const [categories, setCategories] = useState(CATEGORIES_LIST);
    const [price, setPrice] = useState([12, 88]);
    const [filtersOpenState, setFilterOpenState] = useState({price: true, color: true, size: true});
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const [sizeVariants, setSizeVariants] =  useState(["small", "medium", "large", "x-large"]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const router = useRouter();

    const colorBgMap: {[color: string] : string} = {};
    const colorsVariants = ["darkred", "green", "black", "yellow", "violet", "orange"];

    colorsVariants.map((color) => {
        colorBgMap[color] = `bg-${color}-700`;
    });


    const toggleFilter = (filterName: string) => {
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
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => goToCategory(category.id)}>
                                <p className="text-base text-secondary capitalize"> {category.name} </p>
                                <FaChevronRight className='h-4 w-4 text-secondary' />
                            </div>
                        )
                    })
                }
            </div>

            <hr className="border-border my-4" />
            
            <div>
                <div className="flex justify-between items-center">
                    <p className="text-base font-semibold"> Price </p>
                    {filtersOpenState.price && <FaChevronUp onClick={() => toggleFilter('price')} className='h-4 w-4 cursor-pointer' />}
                    {!filtersOpenState.price && <FaChevronDown onClick={() => toggleFilter('price')} className='h-4 w-4 cursor-pointer' />}
                </div>
               {filtersOpenState.price && <div className="mt-6">
                    <Slider.Root
                        className="relative flex w-full touch-none select-none items-center"
                        min={0}
                        max={100}
                        step={1}
                        minStepsBetweenThumbs={1}
                        value={price}
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

            <hr className="border-border mt-10 mb-4" />

            <div>
                <div className="flex justify-between items-center">
                    <p className="text-base font-semibold"> Colors </p>
                    {filtersOpenState.color && <FaChevronUp onClick={() => toggleFilter('color')} className='h-4 w-4 cursor-pointer' />}
                    {!filtersOpenState.color && <FaChevronDown onClick={() => toggleFilter('color')} className='h-4 w-4 cursor-pointer' />}
                </div>

                {
                    filtersOpenState.color && <div className="flex flex-wrap gap-4 mt-6">
                        {
                            Object.keys(colorBgMap).map((color) => {
                                    return (
                                        <div 
                                            key={color}
                                            className={`relative h-9 w-9 rounded-full ${colorBgMap[color]} flex items-center justify-center border border-border cursor-pointer`}
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
                <div className="flex justify-between items-center">
                    <p className="text-base font-semibold"> Size </p>
                    {filtersOpenState.size && <FaChevronUp onClick={() => toggleFilter('size')} className='h-4 w-4 cursor-pointer' />}
                    {!filtersOpenState.size && <FaChevronDown onClick={() => toggleFilter('size')} className='h-4 w-4 cursor-pointer' />}
                </div>

                {
                    filtersOpenState.size &&
                        <div className="flex gap-3 mt-6 flex-wrap">
                            {
                                sizeVariants.map((size) => {
                                    return (
                                        <Button 
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

            <Button className="w-full h-[44px] rounded-full mt-6 cursor-pointer bg-brand hover:bg-brand" onClick={() => {}}> Apply Filter </Button>

        </div>
    );
}