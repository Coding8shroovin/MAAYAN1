import React,{useState,useEffect, useRef} from 'react'
 import "./Home.css"


import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import { Link } from "react-router-dom";
import Contact from './Contact';
import { Truck } from "lucide-react";
import {   ArrowDownUp } from "lucide-react";
import { PackageOpen } from "lucide-react";
// import { ChartColumnIncreasing } from "lucide-react";
import { Ship } from "lucide-react";
import {  Plane } from "lucide-react";
import { TrendingUp } from "lucide-react";

import warehouse from "../assets/warehouse.jpg";
import groundShipping from "../assets/GroundShipping.jpg";
import ship from "../assets/ship.jpg"
import logistics from "../assets/logistics.jpg"
import airShipping from "../assets/air1.jpg"
import exportImport from "../assets/export.jpg"
import coco from "../assets/coco.jpeg";
import medic from "../assets/medic.jpeg";
import spices from "../assets/spices (1).jpeg"
import FloatingWhatsappButton from './FloatingWhatsappButton';


function Home() {
  const settings = {
    dots: true,  // Pagination dots
    infinite: true, // Infinite loop
    speed: 3000,    // Transition speed
    slidesToShow: 1,  // Show one image at a time
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Time between transitions
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]}
    const servicesData = [
      {
        icon:<PackageOpen />,
        img: warehouse,
        text: "Warehousing",
        description:
          "Secure and organized storage solutions to keep your inventory safe and accessible, tailored to meet your specific needs."
      },
      {
        icon: <Plane />,
        img: airShipping,
        text: "Air Delivery",
        
        description:
          "Fast and reliable air freight services for timely deliveries across the globe, ensuring your shipments arrive on schedule.",
      },
      {
        icon:<Ship />,
        img: ship,
        text: "Sea Delivery",
        description:
          "Cost-effective and efficient sea freight solutions for bulk shipments, providing global reach with dependable transit times."
      },
      {
        icon:<Truck />,
        img: groundShipping,
        text: "Ground Shipping",
        description:
          "Flexible and reliable ground transportation options for domestic and regional deliveries, optimizing your supply chain."
      },
      {
        icon:<ArrowDownUp />,
        img: exportImport,
        text:"Export/Import",
        description:
        "Expert handling of export and import processes, ensuring smooth and compliant international trade operations."
      },
      {
        icon:<TrendingUp />,
        img: logistics,
        text: "Logistics",
        description:
          "Streamlined local logistics services to manage and distribute goods efficiently within your region, enhancing operational efficiency."
      },
    ];
    const footerRef = useRef(null);
    const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
 const productsData = [
  {
    // icon:<PackageOpen />,
    img: coco,
    text: "Coconut (Raw Powder)",
    description:
      "Secure and organized storage solutions to keep your inventory safe and accessible, tailored to meet your specific needs."
  },
  {
    // icon: <Plane />,
    img: spices,
    text: "Indian Spices",
    
    description:
      "Fast and reliable air freight services for timely deliveries across the globe, ensuring your shipments arrive on schedule.",
  },
  {
    // icon:<Ship />,
    img: medic,
    text: "Pharmaceuticals Products",
    description:
      "Cost-effective and efficient sea freight solutions for bulk shipments, providing global reach with dependable transit times."
  },

];
 
  return (
    <div className='bg-gradient-to-b from-[#ffffff] to-[#dad7cd]'>
      {/* hero section */}
    <div className=' pb-[20px] text-[#3a5a40] pt-[20px]'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl font-unbounded font-bold text-center tracking-wide '>Great Voyages Begins Here</h1>
      {/* video tag */}
       <div className="flex mt-10 justify-center">
       
         <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 max-sm:w-[90%] border border-[#3a5a40] shadow-sm shadow-[#DAD7CD] mx-2 my-4"
        >
          <source src="https://res.cloudinary.com/dduqbr4li/video/upload/w_720/v1727963180/video-3_mulbyt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>  
      <h1 className='text-lg font-bold font-unbounded text-center mt-[30px'>Got any questions or ready to embark </h1>
       <h1 className='text-lg font-bold font-unbounded text-center'> on your voyage with us?</h1>
        <h1 className="text-lg font-bold font-unbounded text-center">Drop us a message!</h1>
        <span className='flex justify-center'>
        <button onClick={scrollToFooter} className='ring-2 ring-[#3a5a40] max-sm:w-[90%] text-[#dad7cd] bg-gradient-to-b from-[#3a5a40] to-black py-[5px] w-[250px] px-2 rounded-md'>Get started</button>
        </span>
       
    </div>
    {/* services and products section */}
    <div className='w-full flex max-sm:flex-col justify-around px-[20px]'>
    <div className="w-1/2 max-w-4xl  py-8 max-sm:w-full ">
      
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className="relative rounded-md">
            <img
              src={service.img}
              alt={service.text}
              className="w-full h-64 object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-bold">{service.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      <div className=' flex flex-col justify-center ml-[10px] space-y-[5px]'>
        <h1 className='text-3xl text-[#3a5a40] font-bold max-sm:text-center'>Services</h1>
        <p className='text-lg font-normal text-[#3a5a40] max-sm:text-center'>Navigate your global trade with us</p>
        <Link to="/Services"><button className='ring-2 ring-[#3a5a40] max-sm:w-full text-[#dad7cd] bg-gradient-to-b from-[#3a5a40] to-black py-[5px] w-[250px] px-2 rounded-md'>Know More</button></Link>
      </div>
      
    </div>
    {/* products */}
    <div className='w-full flex max-sm:flex-col-reverse justify-around px-[20px]'>
    <div className=' flex flex-col justify-center ml-[10px] space-y-[5px]'>
        <h1 className='text-3xl text-[#3a5a40] font-bold max-sm:text-center'>Products</h1>
        <p className='text-lg font-normal text-[#3a5a40] max-sm:text-center'>From Our Inventory To Your Market.</p>
        <Link to="/Products/"><button className='ring-2 ring-[#3a5a40] max-sm:w-full text-[#dad7cd] bg-gradient-to-b from-[#3a5a40] to-black py-[5px] w-[250px] px-2 rounded-md'>Know More</button></Link>
      </div>
      
    <div className="w-1/2 max-w-4xl  py-8 max-sm:w-full">
      
      <Slider {...settings}>
        {productsData.map((service, index) => (
          <div key={index} className="relative rounded-md">
            <img
              src={service.img}
              alt={service.text}
              className="w-full h-64 object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-bold">{service.text}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>


    
    {/* conatct */}
    <section id="contact" ref={footerRef}>
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-unbounded mt-6 text-[#3a5a40]">
        INQUIRE NOW
      </h2>
    <Contact /></section>
    <FloatingWhatsappButton />
    </div>
  )
}

export default Home
