"use client";
import react from "react";
import CircularGallery from "@/components//homeCards/CircularGalary";
import localFont from "next/font/local";
const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
});

const Circularcontent = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex justify-center">
  <h1
    className={`${JersyFont.className} text-[#9AE600] text-3xl min-[290px]:text-5xl sm:text-7xl lg:text-8xl text-center pt-20`}
  >
    WELCOME TO MYSETRY WORLD
  </h1>
</div>

      </div>
      <div className="w-full flex justify-center items-center pb-20 ">
        <div className="w-full relative h-[330px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.1}
            scrollSpeed={1}
          />
        </div>
      </div>
    </>
  );
};
export default Circularcontent;
