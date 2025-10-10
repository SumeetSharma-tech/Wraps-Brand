import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

// 1️⃣ Define the item shape
interface InfiniteMovingCardItem {
  name: string;
  quote: string;
  title: string;
}

// 2️⃣ Define props for the component
interface InfiniteMovingCardsProps {
  items: InfiniteMovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "right", // Changed default to "right" for opposite flow
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      // Reversed the logic: "right" now uses "forwards", "left" uses "reverse"
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "right" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  // Handle scroll events to pause animation on manual scroll
  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "paused";
    }
  };

  // Drag-to-scroll functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
      // Pause animation when starting to drag
      containerRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent text selection while dragging
    const moveX = e.clientX - startX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - moveX;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume animation when drag ends
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "running";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Resume animation when mouse leaves
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll} // Pause animation on scroll
      onMouseDown={handleMouseDown} // Start drag
      onMouseMove={handleMouseMove} // Handle drag movement
      onMouseUp={handleMouseUp} // End drag
      onMouseLeave={handleMouseLeave} // End drag if mouse leaves the container
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-x-auto py-4 cursor-grab active:cursor-grabbing", // Added cursor styles for better UX
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={`${item.name}-${index}`} // Better key to handle duplicate names
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};