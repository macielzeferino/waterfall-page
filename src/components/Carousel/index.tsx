"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import test1 from "../../../public/images/test1.jpg";
import test2 from "../../../public/images/test2.jpg";
import test3 from "../../../public/images/test3.jpg";
import test4 from "../../../public/images/test4.jpg";

const images_carousel = [test1, test2, test3, test4];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images_carousel.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images_carousel.length) % images_carousel.length);
  };

  return (
    <div className="carousel">
      <motion.button 
        onClick={prevImage} 
        className="nav-button" 
        whileTap={{ scale: 0.9 }}
      >
        Anterior
      </motion.button>
      <div className="inner">
        {images_carousel.map((image, index) => (
          <motion.div 
            key={index} 
            className={`image-container ${index === currentIndex ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={image} alt={`Image ${index + 1}`} />
          </motion.div>
        ))}
      </div>
      <motion.button 
        onClick={nextImage} 
        className="nav-button" 
        whileTap={{ scale: 0.9 }}
      >
        Proximo
      </motion.button>
    </div>
  );
}
