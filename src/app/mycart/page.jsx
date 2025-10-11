'use client'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OrderSummary from "../../components/orderSummary";
import Navbar from "../../components/navbar/Navbar";
import IMg from "../../../public/images/card.webp"
import localFont from "next/font/local";

const Jersey = localFont({
  src: "../../../public/fonts/Jersey.ttf",
  variable: "--font-jersey",
});

const CartPage = () => {
  const cartItems = [
{
id: 1,
name: "Coca Cola",
packSize: "500ml Bottle",
price: 30,
quantity: 2,
image: IMg,
},
{
id: 2,
name: "Pepsi",
packSize: "1L Bottle",
price: 50,
quantity: 1,
image: IMg,
},
];
  const handleQuantityChange = (id, delta) => {
    
  };

  const handleApplyCoupon = async () => {
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const discountPercent =  0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalCost = subtotal - discountAmount + shipping;

  return (
    <div className="bg-[#090701]">
      <Navbar />
      <div className="min-h-screen text-white px-4 md:px-12 py-8">
        <h1 className={`${Jersey.variable} text-3xl font-bold mb-8`}>Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 bg-[#131313] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-semibold">{totalItems} Items</p>
              <button
                className="text-red-500 cursor-pointer hover:underline text-sm"
                onClick={() => { 
                }}
              >
                Clear Cart
              </button>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.packSize}</p>
                    <button
                      className="text-red-500 cursor-pointer text-sm mt-1 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between sm:ml-auto w-full sm:w-auto">
                  <div className="flex items-center gap-2 justify-start">
                    <button
                      className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-700 rounded"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-700 rounded"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right min-w-[100px]">
                    <p>₹{item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-400">
                      Total: ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            discountPercent={discountPercent}
            discountAmount={discountAmount}
            totalCost={totalCost}
            handleApplyCoupon={handleApplyCoupon}
            isCouponApplied={false}
          />
        </div>

        <div className="mt-6">
          
            ← Continue Shopping
         
        </div>
      </div>
    </div>
  );
};

export default CartPage;