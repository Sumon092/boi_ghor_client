import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Button } from "./UI/Button";
import NewArrivalCard from "./NewArrivalCard";


const NewArrival = () => {
    return (
        <>
           <div className="bg-gray-300 p-3 font-bold flex justify-between items-center mt-3">
            <div className="hover:text-[#4472a3] cursor-pointer">
              <h2>NEW ARRIVALS</h2>
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
          <div className="mt-7 border flex flex-col border-gray-300 border-dotted">
            <NewArrivalCard/>
            <NewArrivalCard/>
            <NewArrivalCard/>
            <NewArrivalCard/>
          </div>
        </>
    );
};

export default NewArrival;