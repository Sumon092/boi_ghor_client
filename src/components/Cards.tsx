import BestSeller from "./BestSeller";
import HotDeals from "./HotDeals";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-5 mb-5">
      <div className="col-span-1 md:col-span-1 h-[450px] relative">
        <HotDeals />
      </div>
      <div className="col-span-3 md:col-span-3  h-96 ">
        <div className="grid grid-cols-3 gap-7">
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
          <BestSeller />
        </div>
      </div>
    </div>
  );
};

export default Cards;
