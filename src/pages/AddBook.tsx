/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler} from 'react-hook-form';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation, useGetBooksQuery } from "../redux/features/books/bookApi";
import useAuth from "../hooks/useAuth";
import { Input } from "../components/UI/Input";
import { IBook } from "../types/globalTypes";
import toast from 'react-hot-toast';


export default function AddNewBook() {
  const {auth}=useAuth()
  const [addBook] = useAddBookMutation();
  const {refetch } = useGetBooksQuery(undefined);
  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IBook>();
  const onSubmit: SubmitHandler<IBook> = (data) => {
    if(!auth){
      navigate('/login')
    }
    addBook({ data, token })
      .unwrap()
      .then((res) => {
        if (res?.status === 200) {
          toast.success(
            "Book Added successful"
          )
          reset();
          refetch()
          navigate("/");
        }else{
          toast.error("Something went wrong")
        }
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };
  
  return (
    <>
      <div className="border-2 w-1/3 border-[#5c6baf] mx-auto rounded-lg  p-4">
        <div className="w-full mx-auto">
          <div className="">
            <h1 className="text-2xl text-center my-5 font-bold text-gray-500">
              <span>ADD NEW BOOK</span>
            </h1>

            <div className="text-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  placeholder="title"
                  className="rounded my-2  outline-none p-3 mx-auto  border bg-gray-200"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="mx-2 text-sm text-center text-red-600">
                    title is required
                  </span>
                )}

                <Input
                  placeholder="author"
                  className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              border bg-gray-200"
                  {...register("author", { required: true })}
                />
                {errors.author && (
                  <span className="mx-2 text-sm text-red-600">
                    author is required
                  </span>
                )}

                <Input
                  placeholder="genre"
                  className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              border bg-gray-200"
                  {...register("genre", { required: true })}
                />
                {errors.genre && (
                  <span className="mx-2 text-sm text-red-600">
                    genre is required
                  </span>
                )}
                <Input
                  placeholder="publication Date"
                  className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
             border bg-gray-200"
                  type="date"
                  {...register("publication_date", { required: true })}
                />
                {errors.publication_date && (
                  <span className="mx-2 text-sm text-red-600">
                    publication Date is required
                  </span>
                )}

                <Input
                  className="bg-[#5c6baf] cursor-pointer rounded hover:bg-[#4c6baf] text-white text-xl p-1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textTransform: "uppercase",
                  }}
                  type="submit"
                />
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
