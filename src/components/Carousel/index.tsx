"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import img1 from '../../../public/images/img1.png';
import img2 from '../../../public/images/img2.png';
import img3 from '../../../public/images/img3.jpeg';

const images_carousel = [img1, img2, img3];

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
        Prev
      </motion.button>
      <div className="inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images_carousel.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <motion.button 
        onClick={nextImage} 
        className="nav-button" 
        whileTap={{ scale: 0.9 }}
      >
        Next
      </motion.button>
    </div>
  );
}
