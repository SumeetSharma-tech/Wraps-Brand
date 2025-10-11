"use client"; // if you're in /app dir

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TransitionLink from "../TransitionLink";
import LOGOV1 from "../../../public/images/LOGO/2.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Scroll handler for hiding/showing navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page (normal sticky behavior)
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up (fixed behavior)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [lastScrollY]);

  const navItems: { label: string; shortLabel?: string; path: string }[] = [
    { label: "Home", path: "/" },
    { label: "Game Collection", shortLabel: "Game", path: "/gamecollections" },
    { label: "All ", shortLabel: "All", path: "/All" },
    { label: "Orders", path: "/my_orders" },
    { label: "Contact", path: "/contact" },
    { label: "LeaderBoard", path: "/leaderboard" },
  ];

  // Hardcode values for testing
  const isSignedIn = false;
  const totalItems = 2;

  return (
    <div 
      className={`w-full ${lastScrollY > 10 ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/10"></div>
      
      {/* Navbar content */}
      <div className="relative flex items-center justify-between px-3 md:px-10 py-2">
        {/* Left: Logo */}
        <div className="h-10 md:h-13 lg:h-15 flex-shrink-0 mt-3 overflow-x-hidden">
          <Link href="/">
            <Image
              src={LOGOV1}
              alt="Company Logo"
              className="w-auto h-full object-contain" // w-auto lets it scale naturally
              width={200} // Larger base width
              height={70} // Match your largest height (lg:h-20 = 80px)
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Nav Menu */}
        <div className="hidden lg:flex flex-1 justify-center min-w-0">
          <div className="w-full max-w-lg bg-black/20 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 px-2 py-1">
            <ul className="flex h-full justify-between gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path} className="relative">
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative z-10 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm flex items-center justify-center transition-all duration-300 ease-in-out ${
                        isActive ? "text-black" : "hover:bg-white/10 text-white"
                      }`}
                    >
                      <span className="xl:hidden">{item.shortLabel || item.label}</span>
                      <span className="hidden xl:inline">{item.label}</span>
                      {isActive && (
                        <span className="absolute inset-0 bg-white z-[-1] rounded-full transition-all duration-300 ease-in-out scale-95 opacity-90"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right: Desktop Login and Cart */}
        <div className="hidden lg:flex items-center gap-2 ml-4">
          <div
            className={`cursor-pointer ${
              !isSignedIn && "bg-gradient-to-t from-lime-300 to-lime-600"
            } text-black py-1 px-5 rounded-full`}
          >
            {isSignedIn ? "User" : "Sign In"}
          </div>

          <Link href="/drinks/cart">
            <div className="relative w-8 h-8 bg-gradient-to-t from-lime-300 to-lime-600 text-black p-1 rounded-full cursor-pointer flex items-center justify-center">
              <img
                src="https://ik.imagekit.io/wr6ziyjiu/cart-shopping-svgrepo-com.svg?updatedAt=1753178778980"
                alt="Cart"
                className="w-full h-full object-contain"
              />
              {/*{totalItems > 0 && (
                <span className="animate-bounce absolute -top-2 -right-2 min-w-[18px] h-[18px] text-xs bg-red-600 text-white rounded-full flex items-center justify-center px-[5px]">
                  {0}
                </span>
              )}*/}
            </div>
          </Link>
        </div>

        {/* Right: Mobile Menu - Auth + Cart + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <div
            className={`cursor-pointer text-sm ${
              !isSignedIn && "bg-gradient-to-t from-lime-300 to-lime-600"
            } text-black py-1 px-3 rounded-full`}
          >
            {isSignedIn ? "User" : "Sign In"}
          </div>

          <Link href="/drinks/cart">
            <div className="relative w-8 h-8 bg-gradient-to-t from-lime-300 to-lime-600 text-black p-1 rounded-full cursor-pointer flex items-center justify-center">
              <img
                src="https://ik.imagekit.io/wr6ziyjiu/cart-shopping-svgrepo-com.svg?updatedAt=1753178778980"
                alt="Cart"
                className="w-full h-full object-contain"
              />
              {totalItems > 0 && (
                <span className="animate-bounce absolute -top-2 -right-2 min-w-[18px] h-[18px] text-xs bg-red-600 text-white rounded-full flex items-center justify-center px-[5px]">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>

          {/* Hamburger toggle button */}
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 z-40 bg-black/30 backdrop-blur-md rounded-xl shadow-md border border-white/10 mt-2">
          <ul className="flex flex-col items-center gap-2 py-4 px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path} className="w-full text-center">
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full block px-4 py-2 text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black rounded-md"
                        : "hover:bg-white/10 text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;