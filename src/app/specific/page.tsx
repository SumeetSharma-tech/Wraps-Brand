'use client'
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Img from "../../../public/images/card.webp";
import { DropdownButton } from "@/components/ui/dropdown-button-upward";
import {useMemo} from "react";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { useRouter } from "next/navigation";
type Drink = {
  id: number;
  name: string;
  image: string;
  price: number;
};

// const sampleDrinks: Drink[] = [
//   { id: 1, name: "Caramel Latte", image: Img.src, price: 199 },
//   { id: 2, name: "Iced Americano", image: Img.src, price: 149 },
//   { id: 3, name: "Matcha Frappe", image: Img.src, price: 229 },
//   { id: 4, name: "Vanilla Cold Brew", image: Img.src, price: 189 },
//   { id: 5, name: "Mocha Delight", image: Img.src, price: 209 },
//   { id: 6, name: "Hazelnut Cappuccino", image: Img.src, price: 219 },
//   { id: 7, name: "Cinnamon Spice", image: Img.src, price: 179 },
//   { id: 8, name: "Coconut Macchiato", image: Img.src, price: 249 },
//   // extra for variety
//   { id: 9, name: "Almond Breve", image: Img.src, price: 239 },
// ];

const ProductCard: React.FC<{ drink: Drink; href: string }> = ({ drink, href }) => {
   return (
    <a
      href={href}
      className="group relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-[230px] w-[150px] min-[370px]:w-[180px] min-[370px]:h-[270px] md:h-[370px] md:w-[260px] snap-start"
    >
      <div className="relative overflow-hidden rounded-xl h-[300px]">
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

      <div className="absolute bottom-3 right-3 w-5 h-5 xl:w-8 xl:h-8 rounded-full bg-white group-hover:bg-lime-400 flex items-center justify-center">
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
const ProductDetails = () => {
  // ----- Dropdown data -----
    const phonebrand = useMemo(
      () => [
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "google", label: "Google" },
        { value: "oneplus", label: "OnePlus" },
        { value: "xiaomi", label: "Xiaomi" },
      ],
      []
    );
  
    type Brand = "apple" | "samsung" | "google" | "oneplus" | "xiaomi";
    type ModelOption = { value: string; label: string };
    const modelsByBrand: Record<string, ModelOption[]> = useMemo(
      () => ({
        apple: [
          { value: "iphone-14", label: "iPhone 14" },
          { value: "iphone-15", label: "iPhone 15" },
        ],
        samsung: [
          { value: "galaxy-s22", label: "Galaxy S22" },
          { value: "galaxy-s23", label: "Galaxy S23" },
        ],
        google: [
          { value: "pixel-7", label: "Pixel 7" },
          { value: "pixel-8", label: "Pixel 8" },
        ],
        oneplus: [
          { value: "oneplus-10", label: "OnePlus 10" },
          { value: "oneplus-12", label: "OnePlus 12" },
        ],
        xiaomi: [
          { value: "mi-11", label: "Mi 11" },
          { value: "mi-13", label: "Mi 13" },
        ],
      }),
      []
    );
  
    const [selectedBrand, setSelectedBrand] = useState<string>("");
      const [selectedModel, setSelectedModel] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleBrandSelect = (option: { value: string; label: string }) => {
    setSelectedBrand(option.value);
    setSelectedModel("");
  };

  const handleModelSelect = (option: { value: string; label: string }) => {
    setSelectedModel(option.value);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  // Dummy drinks data
  const drinks = [
    {
      id: 1,
      name: "Caramel Latte",
      image: Img.src,
      price: 199,
      type: "Regular",
      flavor: "Caramel",
      packSize: "Single can",
      description:
        "A smooth and sweet caramel latte to give you energy and delight your taste buds.",
    },
    {
      id: 2,
      name: "Iced Americano",
      image: Img.src,
      price: 149,
      type: "Zero Sugar",
      flavor: "Coffee",
      packSize: "Single can",
      description: "Refreshing iced americano with a bold coffee flavor.",
    },
    {
      id: 3,
      name: "Matcha Frappe",
      image: Img.src,
      price: 229,
      type: "Ultra",
      flavor: "Matcha",
      packSize: "Pack of 4",
      description: "Delicious matcha frappe with a creamy texture.",
    },
    {
      id: 4,
      name: "Vanilla Cold Brew",
      image: Img.src,
      price: 189,
      type: "Regular",
      flavor: "Vanilla",
      packSize: "Pack of 12",
      description: "Smooth vanilla cold brew, perfect for a hot day.",
    },
  ];

  // For this dummy page, select the first drink
  const drink = drinks[0];

  // Related drinks (exclude the current drink)
  const relatedDrinks = drinks.filter((d) => d.id !== drink.id);

  // Dummy Add to Cart
  const handleAddToCart = (drink: Drink) => {
    alert(`Added ${drink.name} to cart!`);
  };

  return (
    <div className="bg-[#090701] text-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Home / Drinks / <span className="text-white">{drink.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <div className="self-start lg:w-1/2 bg-[#13120f] p-6 rounded-md">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-1/2 space-y-10 text-base leading-relaxed text-white">
            {/* Title & Price */}
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{drink.name}</h1>
              <span className="text-2xl font-bold text-lime-400">
                ₹{drink.price}
              </span>
            </div>

            {/* Buttons */}
            <div className="sm:flex-row sm:items-center gap-4 w-full">
  {/* Dropdowns + Quantity */}
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 flex-1 mb-4">
    <DropdownButton
                className="mr-2"
                onSelect={handleBrandSelect}
                options={phonebrand}
                placeholder="Select Brand"
                variant="outline"
                dropupMode={true}
              />
    <DropdownButton
            className="mr-2"
            onSelect={handleModelSelect}
            options={selectedBrand ? modelsByBrand[selectedBrand] : []}
            placeholder={
              selectedBrand ? "Select Model" : "Select Brand First"
            }
            variant="outline"
            dropupMode={true}
            disabled={!selectedBrand}
          />
    
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
    <button
      onClick={() => handleAddToCart(drink)}
      className="bg-lime-400 active:scale-95 cursor-pointer text-black px-6 py-2 rounded hover:bg-lime-500 transition font-semibold w-full sm:w-auto text-center"
    >
      Add to Cart
    </button>
    <button
      onClick={() => handleAddToCart(drink)}
      className="relative overflow-hidden border border-white px-6 py-2 rounded font-semibold text-white transition-all duration-800 group w-full sm:w-auto text-center"
    >
      Buy Now
    </button>
  </div>
</div>

            {/* Description */}
            <div className="space-y-3">
              <h2 className="font-semibold text-xl">Description</h2>
              <p className="text-gray-300">{drink.description}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>
                  <span className="font-medium text-white">Type:</span> {drink.type}
                </li>
                <li>
                  <span className="font-medium text-white">Flavor:</span> {drink.flavor}
                </li>
                <li>
                  <span className="font-medium text-white">Pack Size:</span> {drink.packSize}
                </li>
              </ul>
            </div>

            {/* Collapsible Sections */}
            <div className="border-t border-[#2a2a2a]">
              {["Shipping", "Reviews"].map((section) => (
                <div key={section} className="border-b border-[#2a2a2a] py-4">
                  <button
                    onClick={() =>
                      setActiveSection(activeSection === section ? null : section)
                    }
                    className="w-full hover:cursor-pointer text-left font-semibold text-lg flex justify-between items-center"
                  >
                    {section}
                    <span className="text-xl">
                      {activeSection === section ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeSection === section
                        ? "max-h-40 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    } text-gray-400 text-sm leading-relaxed`}
                  >
                    {section === "Shipping" ? (
                      <p>🚚 Ships in 2-3 business days. Free shipping on orders over ₹500.</p>
                    ) : (
                      <p>⭐️⭐️⭐️⭐️⭐️ — &quot;Absolutely love the flavor and the energy boost!&quot;</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Drinks */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Related Drinks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {relatedDrinks.map((d) => (
              <ProductCard key={d.id} drink={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
