/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuth from "../hooks/useAuth";
import { useGetReadingQuery } from "../redux/features/books/bookApi";


const ReadingLists = () => {
    const {token}=useAuth()
    const {data,isLoading,}=useGetReadingQuery(token)
    const bookTitles=data?.data?.reading?.map((d: { title: any; })=>d.title);
    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <div>
        <h2 className="text-xl mb-3 mt-0 font-bold">Reading</h2>
        {bookTitles?.map((title:string, index:string) => (
          <p key={index}>{title}</p>
        ))}
      </div>
    );
};

export default ReadingLists;