import "../styles/Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoriesList from "./CategoriesList";
import Slider from "./Slider";
const Banner = () => {
  return (
    <div className="h-[80vh-80px] grid grid-cols-1 md:grid-cols-4 gap-7">
      <div className="col-span-1 md:col-span-1 border-gray-200 border p-0">
        <CategoriesList />
      </div>
      <div className="col-span-3 md:col-span-3  relative h-[80vh]">
        <Slider />
      </div>
    </div>
  );
};

export default Banner;
