import bookImage from "../assets/images/bookImages/etiam-auctor.jpg";
import {
  FaRegStar,
  FaCartPlus,
  FaPlus,
  FaEye,
  FaHeart,
  FaClock,
} from "react-icons/fa";
import { Button } from "./UI/Button";
import TooltipComponent from "./UI/Tooltip";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-5 mb-5">
      <div className="col-span-1 md:col-span-1 h-[450px] relative">
        <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
          <div className="div1 h-72 border border-dotted border-gray-300  flex justify-center items-center relative">
            <img className="h-full" src={bookImage} alt="" />
          </div>
          <div className="w-full opacity-0 hover:opacity-100 p-5 h-72 flex flex-col justify-center items-center bg-black/60 absolute top-0">
            <div className="flex justify-center items-center bg-black/70 text-white hover:bg-[#4472a3]">
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
          <div className="p-3 border border-dotted border-gray-300 text-sm text-gray-700 border-t-0">
            <div className="flex justify-between">
              <span className="hover:text-[#4472a3]">Book Title</span>
              <span className="flex">
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
            <div className="flex justify-between">
              <span className="text-xs text-gray-500">Cut Price</span>
              <span className="font-bold text-[#4472a3]">Price</span>
            </div>
          </div>
          <div className="flex justify-center items-center border border-dotted border-gray-300 border-t-0 p-3 text-[#4472a3] font-bold">
            <FaClock />
            <span className="ml-2 ">365 Days</span>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full bg-[#4472a3] absolute top-6 right-6 flex flex-col justify-center items-center text-white p-2">
          <hr className="h-1 w-full" />
          <span className="text-xs"> -10%</span>
          <hr className="h-1 w-full" />
        </div>
      </div>
      <div className="col-span-3 md:col-span-3  h-96 ">
        <div className="grid grid-cols-3 gap-7 mb-3">
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
        </div>
        <div className="grid grid-cols-3 gap-7 mb-3">
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
        </div>
        <div className="grid grid-cols-3 gap-7 mb-3">
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
        </div>
        <div className="grid grid-cols-3 gap-7 mb-3">
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
          <div className="h-96 relative transition-all duration-300 ease-in-out transform hover:opacity-90 hover:scale-105">
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
        </div>
      </div>
    </div>
  );
};

export default Cards;
