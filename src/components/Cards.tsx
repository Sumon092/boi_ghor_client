import bookImage from "../assets/images/bookImages/etiam-auctor.jpg";
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
              <span>Book Name</span>
              <span>price</span>
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
      <div className="col-span-3 md:col-span-3  h-96 bg-gray-400"></div>
    </div>
  );
};

export default Cards;
