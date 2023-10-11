
import { HiHeart, HiBookOpen, HiArrowUp } from "react-icons/hi";
import { Button } from "./UI/Button";



const SideButton = () => {
  
    return (
        <>
         <div className="flex justify-between">
          <div className="bottom-0 left-0 fixed">
            <div className="mb-1 h-10 w-10 bg-[#4472a3] flex justify-center items-center">
              <Button size="sm">
                <HiHeart className="text-3xl text-white" />
              </Button>
            </div>
            <div className="flex justify-center items-center h-10 w-10 bg-[#4472a3]">
              <Button>
                <HiBookOpen className="text-3xl text-white" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center bottom-0 p-1 fixed right-0  h-10 w-10 bg-[#4472a3]">
            <Button>
              <HiArrowUp className="text-3xl text-white" />
            </Button>
          </div>
        </div>   
        </>
    );
};

export default SideButton;