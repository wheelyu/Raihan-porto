import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";

const CustomShapeDivider = () => {
  // State untuk menyimpan nilai lebar yang dinamis
  const [width, setWidth] = useState("calc(120% + 1.3px)");

  // Fungsi untuk menangani perubahan scroll
  const handleScroll = () => {
    // Dapatkan nilai scroll dari halaman
    const scrollY = window.scrollY;

    // Ubah lebar berdasarkan posisi scroll, misalnya semakin tinggi scroll semakin kecil width-nya
    const newWidth = `calc(${120 + scrollY * 0.1}% + 1.3px)`;

    // Set nilai width baru
    setWidth(newWidth);
  };

  // Gunakan useEffect untuk melacak perubahan scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180 bg-transparent">
      <svg
        className="relative block h-36 transform rotate-y-180 animate-slide-up"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          width: width, // Set width dinamis berdasarkan state
        }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-green-800"
        ></path>
      </svg>
    </div>
  );
};

export default CustomShapeDivider;
