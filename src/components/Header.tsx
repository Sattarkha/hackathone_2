import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
    
      <div className="flex justify-between items-center bg-[#F5F5F5] px-14 py-2">
        {/* Left Side: Logo */}
        <div>
          <Image
            src="/Frame (2).png"
            alt="ball"
            width={24}
            height={24}
            className="py-1"
          />
        </div>
      
        <ul className=" flex flex-row sm:flex-row items-center space-x-4 text-[9px] sm:text-[11px] font-medium">
         <Link href={'/'}> <li>
            Find & Store <span className="pl-2">|</span>
          </li></Link>
          <Link href={'help'}><li>
            Help <span className="pl-2">|</span>
          </li></Link>
          <Link href={'join'}><li>
            Join us <span className="pl-2">|</span>
          </li></Link>
          <Link href={'signIn'}><li>Sign in</li></Link>
        </ul>
      </div>

    
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3">
      
        <div className="mb-2 sm:mb-0">
          <Image
            src="/Vector.png"
            width={58}
            height={20}
            alt="teer"
            className="ml-2 sm:ml-11"
          />
        </div>

      
        <ul className="flex flex-wrap justify-center items-center gap-5 sm:gap-7 text-[14px] font-medium ml-20">
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>

  
        <div className="mt-2 sm:mt-0">
          <input
            type="search"
            placeholder="Search"
            className="bg-[#F5F5F5] rounded-2xl w-[150px] sm:w-[180px] h-10 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

    
      <div className="bg-[#F5F5F5] text-center py-3">
        <h1 className="font-medium text-[15px]">Hello Nike App</h1>
        <p className="text-[11px]">
          Download the app to access everything Nike.{' '}
          <span className="font-medium underline text-[12px]">Get Your Great</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
