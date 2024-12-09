import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    
    <div className='w-[1344px] h-[977px]'>
        <Image src={"/Image (1).png"} width={1200} height={700} alt='jota' className='ml-14'/>
        <div className="flex flex-col justify-center items-center mt-14 px-4">
  <h1 className="font-medium text-[15px] leading-6">First Look</h1>
  <h1 className="font-medium text-[32px] sm:text-[40px] md:text-[56px] leading-[40px] sm:leading-[50px] md:leading-[60px] text-center">
    Nike Air Max Pulse
  </h1>
  <p className="font-normal text-[14px] sm:text-[15px] leading-6 mt-5 text-center">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
    <br className="hidden sm:block" />
    —designed to push you past your limits and help you go to the max.
  </p>
  <div className="flex flex-wrap justify-center gap-4 mt-5">
    <button className="bg-black text-white rounded-full py-2 px-4 w-full sm:w-auto">
      Notify Me
    </button>
    <button className="bg-black text-white rounded-full py-2 px-4 w-full sm:w-auto">
      Shop Air Max
    </button>
  </div>
</div>

    </div>
        
        
    

  )
}

export default Hero