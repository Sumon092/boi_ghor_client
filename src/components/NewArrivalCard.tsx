import { FaRegStar } from "react-icons/fa";
import newArrival from "../assets/images/newarrival/history-month.jpg";

const NewArrivalCard = () => {
  return (
    <>
      <div className=" h-40 flex justify-between items-center p-5 ">
        <div className="">
          <div className="relative border border-gray-300 border-dotted">
            <img className="w-full cursor-pointer" src={newArrival} alt="" />
            <div className="w-full h-full top-0 opacity-0 hover:opacity-100 bg-black/50 absolute cursor-pointer"></div>
          </div>
        </div>
        <div className=" w-1/2">
          <div className="w-full ml-3">
            <span className="text-sm text-gray-700">Book Title</span>
            <br />
            <span className="flex text-orange-600 text-xs cursor-pointer mt-2 mb-2">
              <FaRegStar className="mr-1" />
              <FaRegStar className="mr-1" />
              <FaRegStar className="mr-1" />
              <FaRegStar className="mr-1" />
              <FaRegStar className="mr-1" />
            </span>
            <div className="flex justify-between">
              <span className="text-red-500 font-semibold text-sm">
                $ Price
              </span>
              <span className="text-xs text-gray-600">
                <del>$ Price</del>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 border-b border-gray-300 border-dotted mr-auto ml-auto"></div>
    </>
  );
};

export default NewArrivalCard;
