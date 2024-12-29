import React from "react";

const Hero = () => {
  return (
    <section
      className="fixed pt-[5rem] mt-[7rem] w-full h-full"
      style={{
        backgroundImage: "url('../src/assets/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container relative">
        <div>
          {/* If you want to include another image inside the section */}
          {/* <img src="/path/to/your/image.jpg" alt="Your Image Description" /> */}
        </div>
        <div className="z-1 max-w-[68rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-9 lg:ml-28 font-serif">
            <span className="text-red-500">Explore</span> the{" "}
            <span className="text-yellow-300">beauty</span> of{" "}
            <span className="text-purple-600">Financial Technology</span> with{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
              Bruex
            </span>.
          </h1>
          <p className="body-1 py-9 font-serif ml-4 lg:ml-8">
            Unlock the finance with technologies with AI powered with Breux.
          </p>
        </div>
        <div className="flex justify-center items-center sm:-right-14">
          <button className="relative border-2 border-transparent bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-yellow-300 px-9 py-4 rounded-full overflow-hidden transform lg:-translate-y-10 lg:translate-x-30">
            <span className="absolute inset-0 bg-n-7 rounded-full"></span>
            <span className="relative bg-transparent hover:text-purple-600">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
