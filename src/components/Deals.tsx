import { Button } from "./UI/Button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Deals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-5">
      <div className="col-span-1 md:col-span-1 bg-gray-300 p-3 font-bold flex justify-between items-center">
        <div>
          <h2 className="hover:text-[#4472a3] cursor-pointer">HOT DEALS</h2>
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
      <div className="col-span-3 md:col-span-3 bg-gray-300 p-3 font-bold flex justify-between items-center">
        <div>
          <h2 className="hover:text-[#4472a3] cursor-pointer">BEST SELLER</h2>
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
  );
};

export default Deals;
