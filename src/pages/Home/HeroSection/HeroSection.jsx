import React from "react"; 
import video from "../../../assets/video/herovideo.mp4"

const HeroSection = () => {

  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      <div className="absolute top-0 left-0 h-full w-full z-10">
        <div className="relative h-full w-full">
          {/* Arrow shape using clip-path */}
          <div className="absolute top-0 -left-20 h-full w-full bg-blue-600 transform animate-slide-arrow"
               style={{
                 backgroundColor: 'rgba(37, 99, 235, 0.5)',
                 clipPath: 'polygon(-5% 0, 25% 0, 50% 50%, 25% 100%, -5% 100%, 20% 50%)',
               }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative left-[15%] z-10 h-full flex flex-col justify-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-bold max-w-4xl mb-6">
          IT solutions for your business
        </h1>
        <p className="text-white text-xl md:text-2xl max-w-3xl mb-8">
          Magnetic Codes is a dynamic IT solutions provider that draws together cutting-edge technology and creative problem-solving to deliver powerful digital transformations.
        </p>
        <button className="w-[200px] bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors duration-500">
          CONTACT US
        </button>
      </div>
    </div>
      
    </>
  );
};

export default HeroSection;
