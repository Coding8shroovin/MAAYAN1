import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificate1 from "../assets/certificate-1.jpg";
import certificate2 from "../assets/certificate-2.jpg";
import certificate3 from "../assets/certificate-3.jpg";
import certificate4 from "../assets/certificate-4.jpg";
import certificate5 from "../assets/certificate-5.jpg";
import certificate6 from "../assets/certificate-6.jpg";
import certificate7 from "../assets/certificate-7.jpg";
import certificate8 from "../assets/certificate-8.jpg";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,           // Enable auto-scroll
    autoplaySpeed: 3000,      // Auto-scroll every 3 seconds
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  const servicesData = [
    { img: certificate1 },
    { img: certificate2 },
    { img: certificate3 },
    { img: certificate4 },
    { img: certificate5 },
    { img: certificate6 },
    { img: certificate7 },
    { img: certificate8 },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className='bg-gradient-to-b from-[#dad7cd] to-[#3a5a40] py-10'>
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-center mb-12 text-[#3a5a40] tracking-widest">Certificates</h2>

        {/* Auto-scrolling certificates carousel */}
        <div className="w-full flex justify-center">
          <div className="w-3/4 max-w-6xl mx-auto">
            <Slider {...settings}>
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="p-4 cursor-pointer"
                  onClick={() => handleImageClick(service.img)}
                >
                  <img
                    src={service.img}
                    alt={`Certificate ${index + 1}`}
                    className="rounded-lg shadow-md object-cover w-full h-60 max-sm:h-80 hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Zoom Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleClose}>
            <div className="relative">
              <img
                src={selectedImage}
                alt="Zoomed Certificate"
                className="rounded-lg max-w-full max-h-screen object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-3 hover:bg-gray-700 transition duration-200"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
