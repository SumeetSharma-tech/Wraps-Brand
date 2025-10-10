'use client'
import React from "react";
import OrderSummary from "../../components/orderSummary";
import PersonDetails from "../../components/PersonDetailes";
import Navbar from "../../components/navbar/Navbar";

const CheckoutPage = () => {
  const subtotal = 0;
  const coupon = 0;
  const shipping = 5;
  const discountPercent = coupon || 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalCost = subtotal - discountAmount + shipping;

  return (
    <div className="bg-[#090701] max-h-screen overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen text-white px-4 md:px-12 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left: Delivery Form */}
        <PersonDetails totalCost={totalCost} />

        {/* Right: Order Summary */}
        <OrderSummary
          subtotal={subtotal}
          shipping={shipping}
          discountPercent={discountPercent}
          discountAmount={discountAmount}
          totalCost={totalCost}
          couponCode={coupon || ""}
          setCouponCode={() => {}}
          handleApplyCoupon={() => {}}
          isCouponApplied={!!coupon}
          setIsCouponApplied={() => {}}
          setDiscountPercent={() => {}}
          showActions={false}
          showCheckout={false}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
