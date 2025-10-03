"use client";

interface BuyNowButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function BuyNowButton({ 
  onClick, 
  disabled = false, 
  className = "" 
}: BuyNowButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-1 bg-[#9AE600] text-black font-semibold rounded-md
        hover:bg-[#8BD000] transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-[#9AE600] focus:ring-offset-2
        ${className}
      `}
    >
      Buy Now
    </button>
  );
}