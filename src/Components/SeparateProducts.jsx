import React from 'react';
import { prods } from '../Constants/Data';
import { useParams } from 'react-router-dom';
import Contact from './Contact';

function SeparateProducts() {
  const { id } = useParams();
  const products = prods.filter((prod) => prod.id == id);

  return (
    <div className='mb-[20px] bg-gradient-to-b from-[#dad7cd] to-[#ffffff]'>
      {products.map((prod, index) => (
        <div key={index}>
          <h1 className='text-3xl text-center text-[#3a5a40] font-unbounded my-[20px]'>
            {prod.text}
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mx-auto px-[10px] justify-items-center max-sm:grid-cols-1'>
            {prod.Separateproducts.map((sep) => (
              <div
                key={sep.id}
                className='w-full sm:w-[300px] lg:w-[350px] text-[#dad7cd] bg-[#3a5a40] rounded-md p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl'
              >
                <img
                  src={sep.image}
                  className='h-[200px] object-cover w-full rounded-md mb-4'
                  alt={sep.name}
                />
                <h1 className='text-xl font-bold text-center'>{sep.name}</h1>
                <p className='text-lg font-thin text-justify mt-2'>
                  {sep.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeparateProducts;
