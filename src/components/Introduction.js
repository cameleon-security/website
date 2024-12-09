import React, { useState, useEffect } from "react";
import Wallpaper1 from "../assets/wallpaper1.jpg";
import Wallpaper2 from "../assets/wallpaper2.jpg";
import Wallpaper3 from "../assets/wallpaper3.jpg";
import "../css/Introduction.css";
import { motion } from "framer-motion";

import { FaSearch } from "react-icons/fa";

export default function Introduction() {
  const texts = ["Agence detective privée", "21 ans d'experience"];
  const subtitle1 = [
    "Le serieux et la garantie principe de l’agence",
    "Enquêtes et filatures, privées, indistruelles et commerciales.",
  ];
  const subtitle2 = [
    "Vous pouvez nous faire confiance",
    "Services aux particuliers et aux entreprises",
  ];
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [visibleSubtitle1, setVisibleSubtitle1] = useState(0);
  const [visibleSubtitle2, setVisibleSubtitle2] = useState(0);

  const [isVisible, setIsVisible] = useState(true);

  const [prevImage, setPrevImage] = useState(null);

  const images = [Wallpaper1, Wallpaper2, Wallpaper3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setVisibleTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setVisibleSubtitle1((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setVisibleSubtitle2((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="investigation" className="relative h-screen">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <motion.div id="IntrodictionText" className="mb-16 z-10 text-opacity-100">
        <motion.div
          initial={{ x: 600 }} // Set initial position offscreen to the left
          animate={{ x: 0 }} // Animate to center
          transition={{ duration: 1 }} // Set animation duration
        >
          <motion.hr />
          <p
            id="title"
            className={`fadeText ${isVisible ? "fadeIn" : "fadeOut"}`}
          >
            {texts[visibleTextIndex]}
          </p>
          <p
            id="subtitle1"
            className={`fadeText ${isVisible ? "fadeIn" : "fadeOut"}`}
          >
            {subtitle1[visibleSubtitle1]}
          </p>
          <p
            id="subtitle2"
            className={`fadeText ${isVisible ? "fadeIn" : "fadeOut"}`}
          >
            {subtitle2[visibleSubtitle2]}
          </p>
          <hr />
        </motion.div>
      </motion.div>
    </div>
  );
}
