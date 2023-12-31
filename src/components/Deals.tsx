/* eslint-disable @typescript-eslint/no-explicit-any */
import BestSeller from "./BestSeller";
import HotDeals from "./HotDeals";
import NewArrival from "./NewArrival";
import { Button } from "./UI/Button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import NewArrivalBanner from "./NewArrivalBanner";



const Deals = ({searchFilter:data}:{searchFilter:any}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-5">
      <div className="col-span-1 md:col-span-1 ">
        <div className="flex flex-col">
          <div className="bg-gray-300 p-3 font-bold flex justify-between items-center">
            <div className="hover:text-[#4472a3] cursor-pointer">
              <h2>HOT DEALS</h2>
            </div>
            <div className="p-0 m-0">
              <Button size="sm">
                <FaAngleLeft className="text-2xl text-gray-600 hover:text-[#4472a3]" />
              </Button>
              <Button>
                <FaAngleRight className="text-2xl text-gray-600 hover:text-[#4472a3]" />
              </Button>
            </div>
          </div>
        </div>
        <HotDeals />
        <NewArrival />
      </div>
      <div className="col-span-3 md:col-span-3">
        <div className="flex flex-col mb-5">
          <div className="bg-gray-300 p-3 font-bold flex justify-between items-center"> 
            <div className="hover:text-[#4472a3] cursor-pointer">
              <h2>BEST SELLER</h2>
            </div>
            <div className="p-0 m-0">
              <Button size="sm">
                <FaAngleLeft className="text-2xl text-gray-600 hover:text-[#4472a3]" />
              </Button>
              <Button>
                <FaAngleRight className="text-2xl text-gray-600 hover:text-[#4472a3]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7">
          <BestSeller books={data}/>
        </div>
        <NewArrivalBanner />
        <div className="bg-gray-300 p-3 font-bold flex justify-between items-center mt-7">
          <div className="hover:text-[#4472a3] cursor-pointer">
            <h2>FEATURE PRODUCT</h2>
          </div>
          <div className="p-0 m-0">
            <Button size="sm">
              <FaAngleLeft className="text-2xl text-gray-600 hover:text-[#4472a3]" />
            </Button>
            <Button>
              <FaAngleRight className="text-2xl text-gray-600 hover:text-[#4472a3]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
