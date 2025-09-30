'use client'
import react from 'react';
import Navbar from '@/components/navbar/Navbar';
import localFont from 'next/font/local';
import CircularGallery from "@/components//homeCards/CircularGalary";

import { DropdownButton } from '@/components/ui/dropdown-button-upward'
import { useState } from 'react';
const JersyFont = localFont({
    src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
    display: "swap",
});



const Specific_Collection = () => {
    const defaultItems = [
      { image: `https://ik.imagekit.io/wr6ziyjiu/product1.jpg?updatedAt=1752859784998`, text: "Original",level:"level 1" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product2.jpg?updatedAt=1752859784983`, text: "Mango Loco",level:"level 1" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product3.jpg?updatedAt=1752859784960`, text: "Sunrise",level:"level 1" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product4.jpg?updatedAt=1752859784918`, text: "Zero Sugar",level:"level 1" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product5.jpg?updatedAt=1752859785065`, text: "IRON MAN",level:"level 1" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product6.jpg?updatedAt=1752859784921`, text: "Hydro",level:"level 1" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/carousel_image_7.jpg?updatedAt=1753178066316`, text: "BlueBarry",level:"level 1" },
      { image: `https://ik.imagekit.io/wr6ziyjiu/product8.jpg?updatedAt=1752859784906`, text: "Mnonster Ultra",level:"level 1" },
      
    ];

    const categories = [
    { value: "gaming", label: "Gaming Wraps" },
    { value: "nature", label: "Nature Themes" },
    { value: "abstract", label: "Abstract Designs" },
    { value: "minimalist", label: "Minimalist" },
    { value: "vintage", label: "Vintage Style" }
  ]
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    return (
        <>
            <Navbar />
        <div className="w-full flex justify-center items-center">
                <h1
                  className={`${JersyFont.className} text-[#9AE600] text-5xl  sm:text-8xl mt-6 -mb-8 md:text-6xl lg:text-8xl`}
                >
                  SPIDERMAN
                </h1>
              </div>
              <div className="w-full flex -mt-10 sm:-mt-23 justify-center items-center pb-20 ">
                <div className="w-full relative h-[330px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  <CircularGallery
                  items={defaultItems}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.1}
                    scrollSpeed={1}
                  />
                </div>
              </div>
              <div className='w-full flex mb-10 -mt-10'>
                <div className="space-y-2 ml-2 sm:ml-10">
                             <DropdownButton
                                          options={categories}
                                          placeholder="Select Model"
                                          variant="outline"
                                          dropupMode={true}
                                        />
                          </div>

              </div>
        </>
    );
}

export default Specific_Collection;