import bookImage from "../assets/images/bookImages/etiam-auctor.jpg";
import { FaRegStar, FaCartPlus, FaPlus, FaEye, FaHeart } from "react-icons/fa";
import { Button } from "./UI/Button";
import TooltipComponent from "./UI/Tooltip";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-5 mb-5">
      <div className="col-span-1 md:col-span-1 h-[450px] bg-blue-400">
        <div className="h-96 bg-orange-400">
          <div className="h-72 bg-green-400  flex justify-center items-center">
            <img className="h-full" src={bookImage} alt="" />
          </div>
          <div className="p-3">
            <div className="flex justify-between">
              <span>Book Title</span>
              <span>
                <FaRegStar />
              </span>
            </div>
            <div className="flex justify-between">
              <span>Author</span>
              <span>Genre</span>
              <span>Publication Date</span>
            </div>
            <span>Book Rating</span>
          </div>
        </div>
      </div>
      <div className="col-span-3 md:col-span-3  h-96 ">
        <div className="grid grid-cols-3 gap-7">
          <div className="h-96 relative">
            <div className="div1 h-72 border border-dotted border-gray-300  flex justify-center items-center relative">
              <img className="h-full" src={bookImage} alt="" />
            </div>
            <div className="w-full opacity-0 hover:opacity-100 p-5 h-72 flex flex-col justify-center items-center bg-black/60 absolute top-0">
              <div className="flex justify-center items-center bg-black/30  text-white hover:bg-[#4472a3]">
                <Button>
                  <FaCartPlus className="text-xl" />
                </Button>
                <div>
                  <h4 className="text-sm mr-3">ADD TO CART</h4>
                </div>
              </div>
              <div className="bottom-0 absolute flex justify-center mb-5 text-white">
                <div className="h-7 w-7 border border-white flex justify-center items-center hover:bg-[#4472a3] relative group">
                  <Button>
                    <TooltipComponent content="Quick View" position="top">
                      <FaEye className="text-xl" />
                    </TooltipComponent>
                  </Button>
                </div>
                <div className="h-7 w-7 border border-white flex justify-center items-center ml-2 mr-2 hover:bg-[#4472a3]">
                  <Button>
                    <TooltipComponent content="Add To WishList" position="top">
                      <FaHeart className="text-xl" />
                    </TooltipComponent>
                  </Button>
                </div>
                <div className="h-7 w-7 border border-white flex justify-center items-center hover:bg-[#4472a3]">
                  <Button>
                    <TooltipComponent content="Add Book" position="top">
                      <FaPlus className="text-xl" />
                    </TooltipComponent>
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-3 border border-dotted border-gray-300 text-sm text-gray-700 ">
              <div className="flex justify-between">
                <span className="hover:text-[#4472a3]">Book Title</span>
                <span className="flex text-yellow-600">
                  <FaRegStar className="mr-1" />
                  <FaRegStar className="mr-1" />
                  <FaRegStar className="mr-1" />
                  <FaRegStar className="mr-1" />
                  <FaRegStar className="mr-1" />
                </span>
              </div>
              <div className="flex justify-between">
                <span className="hover:text-[#4472a3]">Author</span>
                <span className="hover:text-[#4472a3]">Genre</span>
                <span>Publication Date</span>
              </div>
              <span>Book Rating</span>
            </div>
          </div>
          <div className="h-96 bg-orange-400">
            <div className="h-72 bg-green-400  flex justify-center items-center">
              <img className="h-full" src={bookImage} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <span>Book Title</span>
                <span>Ratings</span>
              </div>
              <div className="flex justify-between">
                <span>Author</span>
                <span>Genre</span>
                <span>Publication Date</span>
              </div>
              <span>Book Rating</span>
            </div>
          </div>
          <div className="h-96 bg-orange-400">
            <div className="h-72 bg-green-400  flex justify-center items-center">
              <img className="h-full" src={bookImage} alt="" />
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <span>Book Title</span>
                <span>Ratings</span>
              </div>
              <div className="flex justify-between">
                <span>Author</span>
                <span>Genre</span>
                <span>Publication Date</span>
              </div>
              <span>Book Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
