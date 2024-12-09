import React from 'react';
import Image from 'next/image';

const BestShoes = () => {
  return (
    <div className="px-4 md:px-8">
    
      <h1 className="font-medium text-2xl leading-7 ml-6 my-6">Best of Air Max</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Image
          src="/Frame (3).png"
          alt="Shoe 1"
          width={400}
          height={510}
          className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
        />
        <Image
          src="/Frame (same).png"
          alt="Shoe 2"
          width={400}
          height={510}
          className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
        />
        <Image
          src="/Frame (ft).png"
          alt="Shoe 3"
          width={400}
          height={510}
          className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
        />
      </div>

      {/* Featured Section */}
      <div>
        <h1 className="font-medium text-2xl leading-7 mt-16 ml-6 my-6">Featured</h1>
        <div className="flex justify-center">
          <Image
            src="/Image (2).png"
            alt="Featured"
            width={1230}
            height={500}
            className="w-full max-w-[1200px] h-auto"
          />
        </div>
      </div>

  
      <div className="flex flex-col items-center text-center mt-10 px-4">
        <h1 className="font-medium text-[30px] sm:text-[40px] md:text-[54px] leading-tight">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="font-normal text-[14px] sm:text-[15px] leading-6 mt-6">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <button className="bg-black text-white rounded-full py-2 px-4 mt-6">
          Find Your Shoe
        </button>
      </div>

    
      <h1 className="font-medium text-2xl leading-7 ml-6 my-6">Gear Up</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <div className='flex flex-col sm:flex-row sm:gap-7 '>
        <div className="flex  gap-2 justify-center">
          <Image
            src="/Frame (s).png"
            alt="Shirt"
            width={300}
            height={393}
            className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto"
          />
          <Image
            src="/Frame (4).png"
            alt="Shorts"
            width={300}
            height={393}
            className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto"
          />
        </div>
        <div className="flex  gap-2 justify-center">
          <Image
            src="/Frame (5).png"
            alt="Other Item 1"
            width={300}
            height={393}
            className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto"
          />
          <Image
            src="/Frame (6).png"
            alt="Other Item 2"
            width={300}
            height={393}
            className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default BestShoes;
