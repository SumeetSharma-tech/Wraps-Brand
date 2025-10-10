"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import localFont from "next/font/local";
import CircularGallery from "@/components/homeCards/CircularGalary";
import { DropdownButton } from "@/components/ui/dropdown-button-upward";
import { useState, useMemo, useCallback } from "react";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { BuyNowButton } from "@/components/ui/buy-now-button";
import ProductCard from "@/components/homeCards/ProductCard";
const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
  display: "swap",
});

const Specific_Collection = () => {
  const defaultItems = useMemo(() => [
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product1.jpg?updatedAt=1752859784998`,
      text: "Original",
      level: "Level 1",
      id: 1,
      story: "The classic Spiderman design that started it all. This iconic red and blue suit represents Peter Parker's journey from ordinary teenager to extraordinary hero.",
      features: ["Classic Red & Blue Design", "Web Pattern Details", "High-Quality Vinyl", "Bubble-Free Application"],
      rarity: "Common",
      collection: "Classic Heroes"
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product2.jpg?updatedAt=1752859784983`,
      text: "Mango Loco",
      level: "Level 2",
      id: 2,
      story: "A vibrant twist on the classic design. This tropical-inspired variant brings energy and excitement with its bold color scheme.",
      features: ["Tropical Color Scheme", "Matte Finish", "Scratch Resistant", "Easy Installation"],
      rarity: "Rare",
      collection: "Tropical Series"
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product3.jpg?updatedAt=1752859784960`,
      text: "Sunrise",
      level: "Level 3",
      id: 3,
      story: "Inspired by the dawn of a new day, this design captures the hope and determination that drives every hero forward.",
      features: ["Gradient Design", "Metallic Accents", "UV Protection", "Waterproof"],
      rarity: "Epic",
      collection: "Dawn Collection"
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product4.jpg?updatedAt=1752859784918`,
      text: "Zero Sugar",
      level: "Level 4",
      id: 4,
      story: "A sleek, minimalist approach to hero design. Sometimes the most powerful statements are made in black and white.",
      features: ["Monochrome Design", "Premium Texture", "Fingerprint Resistant", "Long-lasting"],
      rarity: "Legendary",
      collection: "Minimalist Pro"
    },
    {
      image: `https://ik.imagekit.io/wr6ziyjiu/product5.jpg?updatedAt=1752859785065`,
      text: "IRON MAN",
      level: "Level 5",
      id: 5,
      story: "When technology meets heroism. This crossover design celebrates the alliance between two of Marvel's greatest heroes.",
      features: ["Tech-Inspired Design", "Holographic Elements", "Premium Materials", "Limited Edition"],
      rarity: "Mythic",
      collection: "Crossover Legends"
    },
  ], []);

  const categories = useMemo(() => [
    { value: "gaming", label: "Gaming Wraps" },
    { value: "nature", label: "Nature Themes" },
    { value: "abstract", label: "Abstract Designs" },
    { value: "minimalist", label: "Minimalist" },
    { value: "vintage", label: "Vintage Style" },
  ], []);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Common game information
  const gameInfo = {
    title: "SPIDERMAN Phone Wraps Collection",
    description: "Transform your device with our premium Spiderman-themed phone wraps. Each design is crafted with precision and represents a unique aspect of the Spider-verse.",
    features: [
      "Premium Vinyl Material",
      "Bubble-Free Installation", 
      "Residue-Free Removal",
      "Perfect Fit Guarantee",
      "1 Year Warranty"
    ],
    compatibility: "Compatible with all major phone models"
  };

  // Get current card info
  const currentCard = defaultItems[currentCardIndex] || defaultItems[0];

  const handleCategorySelect = (option: { value: string; label: string }) => {
    setSelectedCategory(option.value);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleBuyNow = () => {
    console.log("Buy Now clicked", { selectedCategory, quantity, currentCard: currentCard.text });
  };

  // Function to handle card change from CircularGallery
  const handleCardChange = useCallback((cardIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentCardIndex(cardIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 200);
    }, 200);
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center mt-5">
        <h1
          className={`${JersyFont.className} text-[#9AE600] text-7xl md:text-9xl mt-6 -mb-6 `}
        >
          SPIDERMAN
        </h1>
      </div>
      <div className="w-full flex  justify-center items-center pb-10 ">
        <div className="w-full relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CircularGallery
            items={defaultItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.1}
            scrollSpeed={1}
            onCardChange={handleCardChange}
          />
        </div>
      </div>

      {/* Dynamic Card Description Section */}
      <div className="max-w-4xl sm:max-w-full mx-auto px-4 py-8 space-y-1 mb-10">
        {/* Current Card Info */}
        <div 
          className={`bg-gray-900/50 rounded-lg p-6 border border-gray-800 relative overflow-hidden transition-all duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            clipPath: isAnimating 
              ? 'circle(0% at 0% 0%)' 
              : 'circle(150% at 0% 0%)',
            transition: 'clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease'
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className={`flex-1 transition-all duration-300 ${
              isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}
            style={{
              transitionDelay: isAnimating ? '0s' : '0.3s'
            }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h2 className={`${JersyFont.className} text-3xl text-[#9AE600]`}>
                  {currentCard.text}
                </h2>
                <span className="bg-[#9AE600] text-black px-3 py-1 rounded-full text-sm font-bold">
                  {currentCard.level}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  currentCard.rarity === 'Common' ? 'bg-gray-600 text-white' :
                  currentCard.rarity === 'Rare' ? 'bg-blue-600 text-white' :
                  currentCard.rarity === 'Epic' ? 'bg-purple-600 text-white' :
                  currentCard.rarity === 'Legendary' ? 'bg-orange-600 text-white' :
                  'bg-red-600 text-white'
                }`}>
                  {currentCard.rarity}
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {currentCard.story}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {currentCard.features.map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <span className="w-2 h-2 bg-[#9AE600] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Collection:</h4>
                  <p className="text-[#9AE600] font-medium">{currentCard.collection}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Information */}
        <div 
          className='bg-gray-900/30 rounded-lg p-6 border border-gray-800 relative overflow-hidden'
        >
          <h3 className="text-xl font-bold text-white mb-4">About This Collection</h3>
          <p className="text-gray-300 mb-4">{gameInfo.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-3">Collection Features:</h4>
              <ul className="space-y-2">
                {gameInfo.features.map((feature, index) => (
                  <li key={index} className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Compatibility:</h4>
              <p className="text-gray-400 text-sm">{gameInfo.compatibility}</p>
            </div>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div 
          className='border-t border-gray-800'
        >
          {["Shipping Info", "Customer Reviews", "Installation Guide"].map((section) => (
            <div key={section} className="border-b border-gray-800 py-4">
              <button
                onClick={() =>
                  setActiveSection(
                    activeSection === section ? null : section
                  )
                }
                className="w-full text-left font-semibold text-lg flex justify-between items-center text-white hover:text-[#9AE600] transition-colors"
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
                {section === "Shipping Info" ? (
                  <p>
                    🚚 Free shipping on orders over ₹500. Standard delivery takes 3-5 business days. 
                    Express delivery available for ₹99 extra.
                  </p>
                ) : section === "Customer Reviews" ? (
                  <p>
                    ⭐️⭐️⭐️⭐️⭐️ — &ldquo;Amazing quality and perfect fit! The design looks exactly like the pictures.&rdquo;
                    <br />⭐️⭐️⭐️⭐️⭐️ — &ldquo;Easy to apply and no bubbles. Highly recommended!&rdquo;
                  </p>
                ) : (
                  <p>
                    📱 Clean your phone thoroughly → Peel off backing → Align carefully → 
                    Apply from center outward → Smooth out any bubbles. Video guide included with purchase.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 bg-black flex justify-between left-1 pt-3 mb-0 sm:left-0 z-50 w-full ">
        <div className="space-y-2 flex ml-1 sm:ml-10">
          <DropdownButton
            className="mr-2"
            onSelect={handleCategorySelect}
            options={categories}
            placeholder="Select Brand"
            variant="outline"
            dropupMode={true}
          />
          <DropdownButton
            className="mr-2"
            onSelect={handleCategorySelect}
            options={categories}
            placeholder="Select Model"
            variant="outline"
            dropupMode={true}
          />
          <QuantitySelector 
            initialValue={1}
            min={1}
            max={10}
            onChange={handleQuantityChange}
          />
        </div>
        <div>
          <BuyNowButton 
            className="h-9 mr-4" 
            disabled={!selectedCategory}
            onClick={handleBuyNow}
          />
        </div>
      </div>
      
    </>
  );
};

export default Specific_Collection;
