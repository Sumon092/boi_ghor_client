import {  useParams } from "react-router-dom";
import { Input } from "../components/UI/Input";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookApi";
import { useEffect } from "react";
import { IBook } from "../types/globalTypes";
import NavBar from "../layouts/NavBar";
import { toast } from "../components/UI/use-toast";
import { Toaster } from "../components/UI/Toaster";
const UpdateBook = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const { data: bookData, isLoading } = useSingleBookQuery(id);
  const [updateBook] = useUpdateBookMutation();
  const existingBook = bookData?.book;
  const publicationDate = existingBook?.publication_date?.split("T")[0];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData: IBook) => {
    try {
      const res = await updateBook({
        data: formData,
        token,
        id,
      });
      if (res?.data?.status === 200) {
        toast({
          description: "Update successful",
        });
      }
      if(res?.data?.status === 401){
        toast({
          description: "You are not authenticated to update this",
        });
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (existingBook && !isLoading) {
      const { title, author, genre } = existingBook;
      setValue("title", title);
      setValue("author", author);
      setValue("genre", genre);
      setValue("publication_date", publicationDate);
    }
  }, [existingBook, isLoading, publicationDate, setValue]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavBar />
      <Toaster />{" "}
      <div className="border-2 border-[#5c6baf]">
        <div className="w-1/3 min-h-screen mx-auto">
          <div className="lg:mt-24 pb-16">
            <h1 className="text-2xl text-center my-5 font-bold text-gray-500">
              <span>UPDATE BOOK</span>
            </h1>

            <div className="text-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  className="rounded my-2  outline-none p-3 mx-auto  border bg-gray-200"
                  {...register("title", { required: true })}
                />

                <Input
                  className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
            border bg-gray-200"
                  {...register("author", { required: true })}
                />

                <Input
                  className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
            border bg-gray-200"
                  {...register("genre", { required: true })}
                />

                <Input
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
};

export default UpdateBook;
