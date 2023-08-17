import { HiMenu } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import '../styles/Banner.css'
import { Button } from "./UI/Button";
import Banner1 from "../assets/images/banner/slider11-834.jpg";
import Banner2 from "../assets/images/banner/slider12-13.jpg";
import Banner3 from "../assets/images/banner/slider13-967.jpg";
import { useEffect, useState } from "react";
const Banner = () => {
  const images = [Banner1, Banner2, Banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7 h-[calc(90vh-80px)] mt-5">
      <div className="col-span-1 md:col-span-1 border-gray-200 border p-0">
        <div className="flex justify-items-start items-center bg-gray-400 w-full">
          <Button>
            <HiMenu className="text-white" size="25" />
          </Button>
          <h3 className="font-bold text-white">CATEGORIES</h3>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex justify-between text-sm">
            <span className="mb-5 text-sm  hover:text-green-500 cursor-pointer">
              Fiction
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-green-500 cursor-pointer  text-gray-500" />
          </div>
          <div className="flex justify-between text-sm">
            <span className="mb-5 text-sm  hover:text-green-500 cursor-pointer">
              Mission
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-green-500 cursor-pointer  text-gray-500" />
          </div>
          <span className="mb-5 text-sm hover:text-green-500 cursor-pointer">
            Mystery
          </span>
          <div className="flex justify-between text-sm">
            <span className="mb-5 text-sm  hover:text-green-500 cursor-pointer">
              Beauty & Health
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-green-500 cursor-pointer  text-gray-500" />
          </div>
          <div className="flex justify-between text-sm">
            <span className="mb-5 text-sm  hover:text-green-500 cursor-pointer">
              Home & Garden
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-green-500 cursor-pointer text-gray-500" />
          </div>
          <span className="mb-5 text-sm hover:text-green-500 cursor-pointer">
            Technology
          </span>
          <span className="mb-5 text-sm hover:text-green-500 cursor-pointer">
            Health & Fitness
          </span>
          <span className="mb-5 text-sm hover:text-green-500 cursor-pointer">
            History
          </span>
          <span className="mb-5 text-sm hover:text-green-500 cursor-pointer">
            Politics & Affair
          </span>
          <span className="mb-2 text-sm hover:text-green-500 cursor-pointer">
            Shapewear
          </span>
        </div>
      </div>
      <div className="col-span-3 md:col-span-3 bg-blue-200 relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop
          selectedItem={currentIndex}
        >
           {images.map((image, index) => (
      <div key={index}>
        <img className="w-full" src={image} alt="" />
        <div className="overlay">
          <div className="text-container">
            {index === 0 && (
              <>
                <h2 className="semi-headline">Discover</h2>
                <h1 className="headline">Amazing Destinations</h1>
                <p className="paragraph">
                  Explore the world with our curated travel experiences and breathtaking destinations.
                </p>
                <Button className="btn">Learn More</Button>
              </>
            )}
            {index === 1 && (
              <>
                <h2 className="semi-headline">Uncover</h2>
                <h1 className="headline">Hidden Treasures</h1>
                <p className="paragraph">
                  Embark on a journey to find hidden gems and immerse yourself in new cultures.
                </p>
                <Button className="btn">Discover Now</Button>
              </>
            )}
            {index === 2 && (
              <>
                <h2 className="semi-headline">Experience</h2>
                <h1 className="headline">Adventurous Escapes</h1>
                <p className="paragraph">
                  Indulge in thrilling adventures and create memories that last a lifetime.
                </p>
                <Button className="btn">Book Your Adventure</Button>
              </>
            )}
          </div>
        </div>
      </div>
    ))}
        </Carousel>
        <Button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-2 rounded-full bg-gray-300 hover:bg-indigo-400 ml-5 "
        >
          <FaAngleLeft className="text-gray-500 hover:text-white" size={24} />
        </Button>
        <Button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-2 rounded-full bg-gray-300 hover:bg-indigo-400 mr-5"
        >
          <FaAngleRight className="text-gray-500 hover:text-white" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
