import { FaCartPlus, FaEye, FaHeart, FaPlus, FaRegStar } from "react-icons/fa";
import { Button } from "./UI/Button";
import TooltipComponent from "./UI/Tooltip";
import bookImage from "../assets/images/bookImages/the-book-of-love.jpg";

const BestSeller = () => {
  return (
    <>
      <div className="relative">
        <div className=" relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
          <div className="h-72 border border-dotted border-[#4472a3]  flex justify-center items-center relative">
            <img className="h-full" src={bookImage} alt="" />
          </div>
          <div className="w-full opacity-0 hover:opacity-100 p-5 h-72 flex flex-col justify-center items-center bg-black/60 absolute top-0">
            <div className="flex justify-center items-center bg-black/30  text-white hover:bg-[#4472a3]">
              <Button>
                <FaCartPlus className="text-xl" />
                <h4 className="text-sm ml-2">ADD TO CART</h4>
              </Button>
            </div>
            <div className="bottom-0 absolute flex justify-center mb-5 text-white">
              <TooltipComponent content="Quick View" position="top">
                <div className="h-7 w-7 border border-white flex justify-center items-center hover:bg-[#4472a3] relative group">
                  <Button>
                    <FaEye className="text-xl" />
                  </Button>
                </div>
              </TooltipComponent>
              <TooltipComponent content="Add To WishList" position="top">
                <div className="h-7 w-7 border border-white flex justify-center items-center ml-2 mr-2 hover:bg-[#4472a3]">
                  <Button>
                    <FaHeart className="text-xl" />
                  </Button>
                </div>
              </TooltipComponent>
              <TooltipComponent content="Add Book" position="top">
                <div className="h-7 w-7 border border-white flex justify-center items-center hover:bg-[#4472a3]">
                  <Button>
                    <FaPlus className="text-xl" />
                  </Button>
                </div>
              </TooltipComponent>
            </div>
          </div>

          <div className="p-3 border border-dotted border-[#4472a3] border-t-0 border-b-0 text-sm text-gray-700 max-h-[80px]">
            <div className="flex justify-between mb-1">
              <span className="hover:text-[#4472a3] font-bold text-md">
                Book Title
              </span>
              <span className="flex text-orange-600 text-xs cursor-pointer">
                <FaRegStar className="mr-1" />
                <FaRegStar className="mr-1" />
                <FaRegStar className="mr-1" />
                <FaRegStar className="mr-1" />
                <FaRegStar className="mr-1" />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm hover:text-[#4472a3]">Author</span>
              <span className="text-sm hover:text-[#4472a3]">Genre</span>
              <span>Publication Date</span>
            </div>
            <div className="p-0 mb-0">
              <span>Book Rating</span>
            </div>
          </div>
          <div className="flex justify-center item-center w-full bg-[#4472a3]/90 p-0 text-white detail-button hover:bg-[#4472a3]">
            <Button className="w-full border-0 font-bold" variant="outline">
              SHOW DETAILS
            </Button>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full bg-black/70 absolute top-6 left-6 flex flex-col justify-center items-center text-white p-2">
          <hr className="h-1 w-full" />
          <span className="text-xs">New</span>
          <hr className="h-1 w-full" />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
