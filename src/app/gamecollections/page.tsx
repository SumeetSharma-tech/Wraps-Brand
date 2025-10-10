"use client";

import React, { useRef, useState } from "react";
import localFont from "next/font/local";
import Img from "../../../public/images/card.webp";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
  display: "swap",
});

type Drink = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const sampleDrinks: Drink[] = [
  { id: 1, name: "Caramel Latte", image: Img.src, price: 199 },
  { id: 2, name: "Iced Americano", image: Img.src, price: 149 },
  { id: 3, name: "Matcha Frappe", image: Img.src, price: 229 },
  { id: 4, name: "Vanilla Cold Brew", image: Img.src, price: 189 },
  { id: 5, name: "Mocha Delight", image: Img.src, price: 209 },
  { id: 6, name: "Hazelnut Cappuccino", image: Img.src, price: 219 },
  { id: 7, name: "Cinnamon Spice", image: Img.src, price: 179 },
  { id: 8, name: "Coconut Macchiato", image: Img.src, price: 249 },
  { id: 9, name: "Almond Breve", image: Img.src, price: 239 },
];

const ProductCard: React.FC<{ drink: Drink; onClickPath?: string }> = ({ drink, onClickPath }) => {
  const router = useRouter();

  return (
    <a
      onClick={() => router.push(onClickPath ?? "/Specific_Collection")}
      className="group relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-[290px] w-[200px] snap-start"
    >
      <div className="relative overflow-hidden rounded-xl h-[290px]">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/60 px-2 py-1 rounded">
          ₹{drink.price}
        </p>
      </div>

      <div className="mt-3">
        <h2 className="text-base md:text-lg font-semibold leading-tight line-clamp-1">
          {drink.name}
        </h2>
      </div>

      <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-white group-hover:bg-lime-400 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17l10-10M7 7h10v10"
          />
        </svg>
      </div>
    </a>
  );
};

export default function GameCollections() {
  const router = useRouter();

  // Each row has its own currentIndex state
  const [currentIndex1, setCurrentIndex1] = useState(1);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [currentIndex3, setCurrentIndex3] = useState(1);
  const [currentIndex4, setCurrentIndex4] = useState(1);
  const [currentIndex5, setCurrentIndex5] = useState(1);

  const containerRef1 = useRef<HTMLDivElement | null>(null);
  const containerRef2 = useRef<HTMLDivElement | null>(null);
  const containerRef3 = useRef<HTMLDivElement | null>(null);
  const containerRef4 = useRef<HTMLDivElement | null>(null);
  const containerRef5 = useRef<HTMLDivElement | null>(null);

  // Function to render each horizontal section
  const renderSection = (
    title: string,
    containerRef: React.RefObject<HTMLDivElement | null>,
    currentIndex: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    // Scroll handler to update currentIndex
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = 210; // Approximate width of card + gap
      const newIndex = Math.round(scrollLeft / cardWidth) + 1; // 1-based index
      setCurrentIndex(newIndex);
    };

    return (
      <div className="mb-10">
        <div className="flex ml-4 md:ml-10 mt-4">
          <h1 className={`${JersyFont.className} text-[#9AE600] text-4xl md:ml-20`}>
            {title}
          </h1>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex grid-cols-2 ml-5 mr-5 md:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-8 xl:ml-30 xl:mr-30 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2 py-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded"
            style={{ scrollSnapType: "x mandatory" }}
            role="list"
          >
            {sampleDrinks.map((d) => (
              <div role="listitem" key={d.id} className="snap-start">
                <ProductCard drink={d} onClickPath="/Specific_Secction" />
              </div>
            ))}
          </div>
          <style jsx>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .no-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}</style>

          <div className="flex justify-center mt-2">
            <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-400 font-medium">
              {currentIndex} / {sampleDrinks.length}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full text-white">
      <Navbar />
      {renderSection("SPIDERMAN", containerRef1, currentIndex1, setCurrentIndex1)}
      {renderSection("BATMAN", containerRef2, currentIndex2, setCurrentIndex2)}
      {renderSection("DC", containerRef3, currentIndex3, setCurrentIndex3)}
      {renderSection("WONDER WOMAN", containerRef4, currentIndex4, setCurrentIndex4)}
      {renderSection("FLASH", containerRef5, currentIndex5, setCurrentIndex5)}
    </div>
  );
}
