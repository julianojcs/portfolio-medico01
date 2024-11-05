/* /components/Carousel.jsx */
'use client'
import { track } from '@vercel/analytics';
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import styles from './carousel.module.css';
import { clinicImages } from '@/utils/constants'

const Carousel = ({ img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    track('Prev Click');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clinicImages.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    track('Next Click');
    setCurrentIndex((prevIndex) => (prevIndex === clinicImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {clinicImages.map((image, index) => (
          <div key={index} className={`${styles.imageWrapper} ${index === currentIndex ? styles.active : ''}`} >
            {index === currentIndex && (
              <>
                <Image
                  src={`${image.picture}-480w.webp`}
                  alt={image.subtitle}
                  aspect-ratio='16 / 9'
                  width={552}
                  height={311}
                  srcSet={`${image.picture}-300w.webp 480w, ${image.picture}-480w.webp 768w`}
                  sizes="(max-width: 300px) 480px, (min-width: 301px) 768px"
                  // unoptimized
                />
                <p className={styles.caption}>{image.subtitle}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <FaChevronCircleLeft className={styles.arrow} onClick={handlePrevClick} />
      <FaChevronCircleRight className={styles.arrow} onClick={handleNextClick} />
      <div className={styles.indicators}>
        {clinicImages.map((_, index) => (
          <a
          key={index}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleIndicatorClick(index);
          }}
          className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
        ></a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;