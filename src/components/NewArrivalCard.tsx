import { FaRegStar } from "react-icons/fa";
import newArrival from "../assets/images/newarrival/history-month.jpg";

const NewArrivalCard = () => {
  return (
    <div className="mt-7 w-full flex justify-between items-center p-5 border border-gray-300 border-dotted">
      <div className="w-[50%] border border-gray-300 border-dotted">
        <img className="w-full" src={newArrival} alt="" />
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
            <span className="text-red-500 font-semibold text-sm">$ price</span>
            <span className="text-sm text-gray-600">
              <del>$ price</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
