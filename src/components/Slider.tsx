import { Carousel } from "react-responsive-carousel";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Button } from "./UI/Button";
import Banner1 from "../assets/images/banner/slider11-834.jpg";
import Banner2 from "../assets/images/banner/slider12-13.jpg";
import Banner3 from "../assets/images/banner/slider13-967.jpg";
import { useEffect, useState } from "react";
const Slider = () => {
  const images = [Banner1, Banner2, Banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

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
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        selectedItem={currentIndex}
      >
        {images.map((image, index) => (
          <div className="h-[80vh]" key={index}>
            <img className="w-full h-full object-cover" src={image} alt="" />
            <div className="overlay">
              <div className="text-container">
                {index === 0 && (
                  <>
                    <h2
                      className={`semi-headline ${
                        currentIndex === 0 ? "anim-semi-head" : ""
                      }`}
                    >
                      Discover
                    </h2>
                    <h1
                      className={`headline ${
                        currentIndex === 0 ? "anim-headline" : ""
                      }`}
                    >
                      Amazing Destinations
                    </h1>

                    <p
                      className={`paragraph ${
                        currentIndex === 0 ? "pg-animation" : ""
                      }`}
                    >
                      Explore the world with our curated travel experiences and
                      breathtaking destinations.
                    </p>
                    <Button
                      className={`btn btn-overlay ${
                        currentIndex === 0 ? "vertical-to-horizontal" : ""
                      }`}
                    >
                      Learn More
                    </Button>
                  </>
                )}
                {index === 1 && (
                  <>
                    <h2
                      className={`semi-headline ${
                        currentIndex === 1 ? "anim-semi-head" : ""
                      }`}
                    >
                      Uncover
                    </h2>
                    <h1
                      className={`headline ${
                        currentIndex === 1 ? "anim-headline" : ""
                      }`}
                    >
                      Hidden Treasures
                    </h1>
                    <p
                      className={`paragraph ${
                        currentIndex === 1 ? "pg-animation" : ""
                      }`}
                    >
                      Embark on a journey to find hidden gems and immerse
                      yourself in new cultures.
                    </p>
                    <Button
                      className={`btn ${
                        currentIndex === 1 ? "vertical-to-horizontal" : ""
                      }`}
                    >
                      Discover Now
                    </Button>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h2
                      className={`semi-headline ${
                        currentIndex === 2 ? "anim-semi-head" : ""
                      }`}
                    >
                      Experience
                    </h2>
                    <h1
                      className={`headline ${
                        currentIndex === 2 ? "anim-headline" : ""
                      }`}
                    >
                      Adventurous Escapes
                    </h1>
                    <p
                      className={`paragraph ${
                        currentIndex === 2 ? "pg-animation" : ""
                      }`}
                    >
                      Indulge in thrilling adventures and create memories that
                      last a lifetime.
                    </p>
                    <Button
                      className={`btn ${
                        currentIndex === 2 ? "vertical-to-horizontal" : ""
                      }`}
                    >
                      Learn More
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-2 rounded-full bg-gray-300 hover:bg-[#4472a3] ml-5 "
      >
        <FaAngleLeft className="text-gray-500 hover:text-white" size={24} />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-2 rounded-full bg-gray-300 hover:bg-[#4472a3] mr-5"
      >
        <FaAngleRight className="text-gray-500 hover:text-white" size={24} />
      </Button>
    </>
  );
};

export default Slider;
