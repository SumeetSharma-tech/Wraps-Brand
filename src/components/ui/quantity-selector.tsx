"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function QuantitySelector({
  initialValue = 1,
  min = 1,
  max = 10,
  onChange
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      onChange?.(value);
    }
  };

  return (
    <div className="flex h-[80%] items-center border border-gray-300 rounded-md">
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-12 text-center border-0 focus:outline-none focus:ring-0"
      />
      
      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronUp className="w-4 h-4" />
      </button>
    </div>
  );
}