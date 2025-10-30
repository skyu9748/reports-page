"use client";
import { useState } from "react";

export default function Reports() {
  const [current, setCurrent] = useState(0);
  const images = ["/1.jpg", "/2.jpg"]; // public 폴더에 1.jpg, 2.jpg 넣기

  const changeSlide = (direction) => {
    setCurrent((prev) => (prev + direction + images.length) % images.length);
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-full object-contain transition-opacity duration-300"
      />

      <button
        onClick={() => changeSlide(-1)}
        className="absolute left-5 text-white text-4xl font-bold hover:opacity-70 select-none"
      >
        &#10094;
      </button>

      <button
        onClick={() => changeSlide(1)}
        className="absolute right-5 text-white text-4xl font-bold hover:opacity-70 select-none"
      >
        &#10095;
      </button>
    </div>
  );
}
