import { HiMenu } from "react-icons/hi";
import { Button } from "./UI/Button";
import { FaAngleRight} from "react-icons/fa";

const CategoriesList = () => {
    return (
        <>
        <div className="flex justify-items-start items-center bg-[#4472a3]  w-full">
          <Button>
            <HiMenu className="text-white" size="25" />
          </Button>
          <h3 className="font-bold text-white">CATEGORIES</h3>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex justify-between text-sm cursor-pointer hover:text-[#4472a3]">
            <span className="mb-5 text-sm hover:text-[#4472a3]">
              Fiction
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-[#4472a3] cursor-pointer  text-gray-500" />
          </div>
          <div className="flex justify-between text-sm">
            <span className="mb-5 text-sm  hover:text-[#4472a3] cursor-pointer">
              Mission
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-[#4472a3] cursor-pointer  text-gray-500" />
          </div>
          <span className="mb-5 text-sm hover:text-[#4472a3] cursor-pointer">
            Mystery
          </span>
          <div className="flex justify-between text-sm">
            <span className="mb-5 text-sm  hover:text-[#4472a3] cursor-pointer">
              Beauty & Health
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-[#4472a3] cursor-pointer  text-gray-500" />
          </div>
          <div className="flex justify-between text-sm">
            <span className="mb-5 text-sm  hover:text-[#4472a3] cursor-pointer">
              Home & Garden
            </span>
            <FaAngleRight className="font-normal text-sm hover:text-[#4472a3] cursor-pointer text-gray-500" />
          </div>
          <span className="mb-5 text-sm hover:text-[#4472a3] cursor-pointer">
            Technology
          </span>
          <span className="mb-5 text-sm hover:text-[#4472a3] cursor-pointer">
            Health & Fitness
          </span>
          <span className="mb-5 text-sm hover:text-[#4472a3] cursor-pointer">
            History
          </span>
          <span className="mb-5 text-sm hover:text-[#4472a3] cursor-pointer">
            Politics & Affair
          </span>
          <span className="mb-2 text-sm hover:text-[#4472a3] cursor-pointer">
            Shapewear
          </span>
        </div>
      
        </>
    );
};

export default CategoriesList;