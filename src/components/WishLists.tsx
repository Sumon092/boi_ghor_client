/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuth from "../hooks/useAuth";
import { useGetWishlistsQuery } from "../redux/features/books/bookApi";


const WishLists = () => {
    const {token}=useAuth()
    const {data,isLoading,}=useGetWishlistsQuery(token)
    const bookTitles=data?.data?.wishLists?.map((d: { title: any; })=>d.title);
    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <div>
        <h2 className="text-xl mb-3 mt-0 font-bold">Wishlists</h2>
        {bookTitles?.map((title:string, index:string) => (
          <p key={index}>{title}</p>
        ))}
      </div>
    );
};

export default WishLists;