import React, { useState, useEffect } from 'react';

const images = [
  {
    name: 'gabe-image2',
    path: '/Gabe-Image1.jpg',
  },
  {
    name: 'gabe-image2',
    path: '/Gabe-Image2.jpg',
  },
  // Add more image objects as needed.
];

const ImageStorage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to switch to the next random image.
  const nextRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomIndex);
  };

  useEffect(() => {
    // Set up the timer to switch images every 3 seconds (adjust as needed).
    const interval = setInterval(nextRandomImage, 5000);

    // Clean up the timer when the component unmounts.
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={images[currentImageIndex].path} alt={images[currentImageIndex].name} className="gabe-image" />
    </div>
  );
};

export default ImageStorage;
