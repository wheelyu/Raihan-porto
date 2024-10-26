import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "./swiper";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// Jika Anda ingin mengimpor modul tambahan

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      easing: "ease-in-out", // Efek easing animasi
      once: false, // Hanya animasi saat pertama kali scroll
    });
  }, []);
  return (
    <div className="bg-green-800 h-screen relative z-20 " id="about">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-ease="ease-in-out"
        className=""
      >
        <div className="h-36"></div>
        <h1 className="md:text-9xl text-3xl font-bold text-slate-900 mt">
          My Experience
        </h1>
        <h1 className="md:text-9xl text-3xl font-bold text-slate-300 relative top-[-40px] md:top-[-120px] md:left-[-10px]">
          My Experience
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="1000"
        data-aos-ease="ease-in-out"
      >
        <Swiper />
      </div>
    </div>
  );
};

export default About;
