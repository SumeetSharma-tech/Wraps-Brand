"use client";
import react from "react";
import Navbar from "@/components/navbar/Navbar";
import localFont from "next/font/local";
import CircularGallery from "@/components//homeCards/CircularGalary";

import { DropdownButton } from "@/components/ui/dropdown-button-upward";
import { useState } from "react";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { BuyNowButton } from "@/components/ui/buy-now-button";
const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
  display: "swap",
});

const Specific_Collection = () => {
  const defaultItems = [
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product1.jpg?updatedAt=1752859784998`,
      text: "Original",
      level: "level 1",
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product2.jpg?updatedAt=1752859784983`,
      text: "Mango Loco",
      level: "level 1",
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product3.jpg?updatedAt=1752859784960`,
      text: "Sunrise",
      level: "level 1",
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product4.jpg?updatedAt=1752859784918`,
      text: "Zero Sugar",
      level: "level 1",
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product5.jpg?updatedAt=1752859785065`,
      text: "IRON MAN",
      level: "level 1",
    },
  ];

  const categories = [
    { value: "gaming", label: "Gaming Wraps" },
    { value: "nature", label: "Nature Themes" },
    { value: "abstract", label: "Abstract Designs" },
    { value: "minimalist", label: "Minimalist" },
    { value: "vintage", label: "Vintage Style" },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center mt-5">
        <h1
          className={`${JersyFont.className} text-[#9AE600] text-7xl md:text-9xl mt-6 -mb-8 `}
        >
          SPIDERMAN
        </h1>
      </div>
      <div className="w-full flex  justify-center items-center pb-30 ">
        <div className="w-full relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
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
      <div className="  fixed bottom-4 flex justify-between left-1 sm:left-0 z-50 w-full ">
        <div className="space-y-2 flex ml-1 sm:ml-10">
          <DropdownButton
            className="mr-2"
            onSelect={(option) => setSelectedCategory(option.value)}
            options={categories}
            placeholder="Select Model"
            variant="outline"
            dropupMode={true}
          />
          <QuantitySelector />
        </div>
        <div>
          <BuyNowButton className="h-10 mr-4" disabled={!selectedCategory} />
        </div>
      </div>
    </>
  );
};

export default Specific_Collection;
