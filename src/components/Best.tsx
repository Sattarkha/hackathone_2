import React from 'react';
import Image from 'next/image';

const Best = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-1">
      
      <div className="max-w-[1344px] mx-auto mt-[100px]">
        <h1 className="font-medium text-[22px] leading-7 pl-4 sm:pl-12">Dont Miss</h1>

        <div className="w-full flex justify-center mt-8">
          <Image
            src="/Image (admi).png"
            alt="admi"
            className="w-full max-w-[1244px] h-auto object-cover"
            width={400}
            height={500}
          />
        </div>

        <div className="text-center mt-12">
          <h1 className="font-medium text-[36px] sm:text-[52px] leading-[48px] sm:leading-[60px] mt-10">
            FLIGHT ESSENTIALS
          </h1>
          <p className="font-normal text-sm leading-6 mt-4 sm:mt-10">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <button className="bg-black text-white rounded-full py-2 px-6 mt-8 sm:mt-14">
            Shop
          </button>
        </div>
      </div>

      
      <div className="max-w-[1344px] mx-auto mt-[100px]">
        <h1 className="font-medium text-[22px] leading-7 pl-4 sm:pl-12">The Essentials</h1>

        <div className="flex flex-wrap justify-center gap-5 mt-8">
          <Image
            src="/Image (jota).png"
            alt="admi"
            className="w-[90%] max-w-[400px] h-auto object-cover"
            width={400}
            height={500}
          />
          <Image
            src="/Image (dr).png"
            alt="admi"
            className="w-[90%] max-w-[400px] h-auto object-cover"
            width={400}
            height={500}
          />
          <Image
            src="/Image (kitab).png"
            alt="admi"
            className="w-[90%] max-w-[400px] h-auto object-cover"
             width={400}
            height={500}
          />
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-32 mt-20">
        
          <div>
            <h1 className="font-bold text-[15px] leading-6">Icons</h1>
            <ul className="space-y-4 mt-2">
              <li className="font-medium text-[15px] leading-6">Air Force 1</li>
              <li className="font-medium text-[15px] leading-6">Huarache</li>
              <li className="font-medium text-[15px] leading-6">Air Max 90</li>
              <li className="font-medium text-[15px] leading-6">Air Max 95</li>
            </ul>
          </div>
          
          <div>
            <h1 className="font-bold text-[15px] leading-6">Shoes</h1>
            <ul className="space-y-4 mt-2">
              <li className="font-medium text-[15px] leading-6">All Shoes</li>
              <li className="font-medium text-[15px] leading-6">Custom Shoes</li>
              <li className="font-medium text-[15px] leading-6">Jordan Shoes</li>
              <li className="font-medium text-[15px] leading-6">Running Shoes</li>
            </ul>
          </div>
          
          <div>
            <h1 className="font-bold text-[15px] leading-6">Clothing</h1>
            <ul className="space-y-4 mt-2">
              <li className="font-medium text-[15px] leading-6">All Clothing</li>
              <li className="font-medium text-[15px] leading-6">Modest Wear</li>
              <li className="font-medium text-[15px] leading-6">Hoodies & Pullovers</li>
              <li className="font-medium text-[15px] leading-6">Shirts & Tops</li>
            </ul>
          </div>
          
          <div>
            <h1 className="font-bold text-[15px] leading-6">Kids</h1>
            <ul className="space-y-4 mt-2">
              <li className="font-medium text-[15px] leading-6">
                Infant & Toddler Shoes
              </li>
              <li className="font-medium text-[15px] leading-6">Kids Shoes</li>
              <li className="font-medium text-[15px] leading-6">Kids Jordan Shoes</li>
              <li className="font-medium text-[15px] leading-6">
                Kids Basketball Shoes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
