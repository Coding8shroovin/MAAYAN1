import React, { useState } from 'react';
import warehouse from "../assets/warehouse.jpg";
import { Search } from "lucide-react";


const Gallery = () => {
    
const galleryImages = [
    { imgSrc: warehouse, alt: 'Image 1', size: 'large' },
    { imgSrc: warehouse, alt: 'Image 2', size: 'medium' },
    { imgSrc: warehouse, alt: 'Image 3', size: 'small' },
    { imgSrc: warehouse, alt: 'Image 4', size: 'large' },
    { imgSrc: warehouse, alt: 'Image 5', size: 'medium' },
    { imgSrc: warehouse, alt: 'Image 6', size: 'small' },
    { imgSrc: warehouse, alt: 'Image 7', size: 'large' },
    { imgSrc: warehouse, alt: 'Image 8', size: 'medium' },
    { imgSrc: warehouse, alt: 'Image 9', size: 'small' },
    { imgSrc: warehouse, alt: 'Image 10', size: 'small' },
    { imgSrc: warehouse, alt: 'Image 11', size: 'medium' },
    
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-6 row-span-2';
      case 'medium':
        return 'col-span-4 row-span-1';
      case 'small':
        return 'col-span-2 row-span-1';
      default:
        return 'col-span-4 row-span-1';
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='bg-[#dad7cd]'>
    <div className="container mx-auto py-10 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#3a5a40] ">Gallery</h2>
      {}
      <div className="grid grid-cols-12 grid-rows-auto gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer ${getSizeClass(image.size)}`}
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.imgSrc}
              alt={image.alt}
              className="rounded-lg shadow-md object-cover w-full h-full hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-neutral-900 via-transparent to-transparent rounded-lg">
              <Search size={32} className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleClose}>
          <div className="relative">
            <img
              src={selectedImage.imgSrc}
              alt={selectedImage.alt}
              className="rounded-lg max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-gray-800 rounded-full p-2"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div></div>
  );
};

export default Gallery;
