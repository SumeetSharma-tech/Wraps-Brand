'use client';
import { useState, Suspense } from "react";
import Navbar from "../../components/navbar/Navbar";
import FiltersContent from "../../components/FiltersContent";
import { FaSpinner } from "react-icons/fa";
import Img from "../../../public/images/card.webp";
import Filter from '../../../public/filter.svg'



type Drink = {
  id: number;
  name: string;
  image: string;
  price: number;
  Link: string;
};

// components/Card.jsx
const ProductCard: React.FC<{ drink: Drink }> = ({ drink }) => {
  return (
    <a
      href={`/specific`}
      className="group relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-[230px] w-[150px] min-[370px]:w-[180px] min-[370px]:h-[270px] md:h-[370px] md:w-[260px]"
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




const Drinks = () => {

 const drink = [
    { id: 1, name: "Caramel Latte", image: Img.src, price: 199, Link: "/specific/1" },
  { id: 2, name: "Iced Americano", image: Img.src, price: 149, Link: "/specific/2" },
  { id: 3, name: "Matcha Frappe", image: Img.src, price: 229, Link: "/specific/3" },
  { id: 4, name: "Vanilla Cold Brew", image: Img.src, price: 189, Link: "/specific/4" },
  { id: 5, name: "Mocha Delight", image: Img.src, price: 209, Link: "/specific/5" },
  { id: 6, name: "Hazelnut Cappuccino", image: Img.src, price: 219, Link: "/specific/6" },
  { id: 7, name: "Cinnamon Spice", image: Img.src, price: 179, Link: "/specific/7" },
  { id: 8, name: "Coconut Macchiato", image: Img.src, price: 249, Link: "/specific/8" },
  // extra for variety
  { id: 10, name: "Almond Breve", image: Img.src, price: 239, Link: "/specific/9" },
  { id: 11, name: "Caramel Latte", image: Img.src, price: 199, Link: "/specific/1" },
  { id: 12, name: "Iced Americano", image: Img.src, price: 149, Link: "/specific/2" },
  { id: 13, name: "Matcha Frappe", image: Img.src, price: 229, Link: "/specific/3" },
  { id: 14, name: "Vanilla Cold Brew", image: Img.src, price: 189, Link: "/specific/4" },
  { id: 15, name: "Mocha Delight", image: Img.src, price: 209, Link: "/specific/5" },
  { id: 16, name: "Hazelnut Cappuccino", image: Img.src, price: 219, Link: "/specific/6" },
  { id: 17, name: "Cinnamon Spice", image: Img.src, price: 179, Link: "/specific/7" },
  { id: 18, name: "Coconut Macchiato", image: Img.src, price: 249, Link: "/specific/8" },
  // extra for variety
  { id: 19, name: "Almond Breve", image: Img.src, price: 239, Link: "/specific/9" },
  { id: 20, name: "Caramel Latte", image: Img.src, price: 199, Link: "/specific/1" },
  { id: 21, name: "Iced Americano", image: Img.src, price: 149, Link: "/specific/2" },
  { id: 22, name: "Matcha Frappe", image: Img.src, price: 229, Link: "/specific/3" },
  { id: 23, name: "Vanilla Cold Brew", image: Img.src, price: 189, Link: "/specific/4" },
  { id: 24, name: "Mocha Delight", image: Img.src, price: 209, Link: "/specific/5" },
  { id: 25, name: "Hazelnut Cappuccino", image: Img.src, price: 219, Link: "/specific/6" },
  { id: 26, name: "Cinnamon Spice", image: Img.src, price: 179, Link: "/specific/7" },
  { id: 27, name: "Coconut Macchiato", image: Img.src, price: 249, Link: "/specific/8" },
  // extra for variety
  { id: 28, name: "Almond Breve", image: Img.src, price: 239, Link: "/specific/9" },
  { id: 29, name: "Caramel Latte", image: Img.src, price: 199, Link: "/specific/1" },
  { id: 30, name: "Iced Americano", image: Img.src, price: 149, Link: "/specific/2" },
  { id: 31, name: "Matcha Frappe", image: Img.src, price: 229, Link: "/specific/3" },
  { id: 32, name: "Vanilla Cold Brew", image: Img.src, price: 189, Link: "/specific/4" },
  { id: 33, name: "Mocha Delight", image: Img.src, price: 209, Link: "/specific/5" },
  { id: 34, name: "Hazelnut Cappuccino", image: Img.src, price: 219, Link: "/specific/6" },
  { id: 35, name: "Cinnamon Spice", image: Img.src, price: 179, Link: "/specific/7" },
  { id: 36, name: "Coconut Macchiato", image: Img.src, price: 249, Link: "/specific/8" },

  // extra for variety
  { id: 37, name: "Almond Breve", image: Img.src, price: 239, Link: "/specific/9" },
  { id: 38, name: "Caramel Latte", image: Img.src, price: 199, Link: "/specific/1" },
  { id: 39, name: "Iced Americano", image: Img.src, price: 149, Link: "/specific/2" },
  { id: 40, name: "Matcha Frappe", image: Img.src, price: 229, Link: "/specific/3" },
  { id: 41, name: "Vanilla Cold Brew", image: Img.src, price: 189, Link: "/specific/4" },
  { id: 42, name: "Mocha Delight", image: Img.src, price: 209, Link: "/specific/5" },
  { id: 43, name: "Hazelnut Cappuccino", image: Img.src, price: 219, Link: "/specific/6" },
  { id: 44, name: "Cinnamon Spice", image: Img.src, price: 179, Link: "/specific/7" },
  { id: 45, name: "Coconut Macchiato", image: Img.src, price: 249, Link: "/specific/8" },
  // extra for variety
  { id: 46, name: "Almond Breve", image: Img.src, price: 239, Link: "/specific/9" },
  { id: 47, name: "Caramel Latte", image: Img.src, price: 199, Link: "/specific/1" },
  { id: 48, name: "Iced Americano", image: Img.src, price: 149, Link: "/specific/2" },
  { id: 49, name: "Matcha Frappe", image: Img.src, price: 229, Link: "/specific/3" },
  { id: 50, name: "Vanilla Cold Brew", image: Img.src, price: 189, Link: "/specific/4" },
  { id: 51, name: "Mocha Delight", image: Img.src, price: 209, Link: "/specific/5" },
  { id: 52, name: "Hazelnut Cappuccino", image: Img.src, price: 219, Link: "/specific/6" },
  ];

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  // For simplicity, we just render all drinks (no real filtering)
const drinksToRender = drink;
;

  // Dummy email logic (no API)
  const [emailInput, setEmailInput] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const handleGetCoupon = () => {
    if (!emailInput) {
      alert("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailInput)) {
      alert("Invalid email format.");
      return;
    }

    if (cooldown) {
      alert("Please wait 20 seconds before requesting again.");
      return;
    }

    alert(`🎉 Coupon sent to ${emailInput}`);
    setEmailInput("");
    setCooldown(true);

    setTimeout(() => setCooldown(false), 20000);
  };

  return (
    <div className="bg-[#090701] text-white min-h-screen w-full max-w-full overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Filters */}
        <aside className="w-full hidden md:hidden lg:block lg:w-1/5 p-4 space-y-6">
          <FiltersContent />
        </aside>

        

        {/* Modal for filters on small screens */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 h-[80vh] flex justify-center items-center lg:hidden">
            <div className="bg-[#151311] w-[90%] max-h-[80vh] overflow-y-auto p-6 rounded-lg relative">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="absolute top-2 right-3 text-white text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">Filters</h2>
              <FiltersContent />
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="w-full h-full lg:w-4/5 space-y-10">
          {/* Promo Section */}
          <div className="text-white md:h-[30vh] rounded-lg p-6 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h1 className="text-3xl font-bold">Pure Energy Big Discount</h1>
              <p className="text-lg mt-2">Save up to 50% off on your first order</p>
              <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Your email address"
                  className="p-2 w-35 md:w-auto border focus:border-lime-400 outline-none border-gray-400 rounded"
                />
                <button
                  onClick={handleGetCoupon}
                  disabled={cooldown}
                  className={`px-4 py-2 rounded text-black ${
                    cooldown ? "bg-gray-400 cursor-not-allowed" : "bg-lime-400 hover:bg-lime-500"
                  }`}
                >
                  {cooldown ? "Wait..." : "Get Coupon"}
                </button>
              </div>
            </div>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs9xYUoN65O3g0X9X5QkfMgDng7TEvoA96XGFv8VniRE9rCA9Kxd4pN-_2gGwmGP2kDENm2uvWtW-A2M_WkQ6OXrzKN-cEekF11s_d0J4Vwj2RfaIjIgAylcY5InD7DtPo2zZUz7NjDEQ/s1600/Tickle_LasVegas_Cox_2011_077.jpg"
              alt="Discount"
              className="h-35 w-35 object-cover rounded-lg hidden lg:block"
            />
          </div>

          {/* Product Grid */}
<div>
  <div className="flex items-center justify-between mb-2">
    <h2 className="text-2xl font-bold ml-3  md:ml-7 xl:ml-10">Popular Products</h2>

    {/* Mobile filter toggle */}
    <div className="lg:hidden flex items-center justify-center">
      <div
        onClick={() => setIsFilterOpen(true)}
        className="flex items-center justify-center cursor-pointer w-8 h-8 mr-3 bg-gradient-to-t from-lime-300 to-lime-600 text-black rounded-full"
      >
        <img
          className="w-5 h-5 object-contain"
          src={Filter.src}
          alt="Filter"
        />
      </div>
    </div>
  </div>

  <div className="grid grid-cols-2 ml-3 mr-3 md:ml-7 md:mr-7 xl:ml-10 sm:grid-cols-3 xl:grid-cols-4 gap-6 -mb-8">
    {drinksToRender
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map((drink) => (
        <Suspense
          fallback={
            <div className="relative bg-[#1a1816] rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-40">
              <FaSpinner />
            </div>
          }
          key={drink.id}
        >
          <ProductCard drink={drink} />
        </Suspense>
      ))}
  </div>
</div>


          {/* Pagination */}
          <div className="flex justify-center mb-8 gap-2">
            {Array.from({ length: Math.ceil(drinksToRender.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  // Scroll to top when changing pages
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                }}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-lime-400 text-black font-bold"
                    : "bg-[#151311] text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Drinks;