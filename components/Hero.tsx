"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="flex flex-col xl:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto">
      {/* Hero Title */}
      <div className="flex-1 pt-36 px-6 sm:px-16">
        <h1 className="text-[50px] sm:text-[64px] 2xl:text-[72px] font-extrabold">
          Find, book or rent a car -- quickly and easily
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/* Button */}
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-600 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      {/* Hero Image Container */}
      <div className="flex xl:flex-[1.5] justify-end items-end w-full xl:h-screen">
        <div className="relative w-[90%] xl:w-full h-[590px] xl:h-full  ">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </div>
        <div className=" absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden   bg-[url('/hero-bg.png')] bg-cover "></div>
      </div>
    </div>
  );
};

export default Hero;
