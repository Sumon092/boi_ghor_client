import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../components/UI/Input";
import useAuth from "../hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetBooksQuery,
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/books/bookApi";
import { useEffect } from "react";
import { IBook } from "../types/globalTypes";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token ,auth} = useAuth();
  const { data: bookData, isLoading } = useSingleBookQuery(id);
  const [updateBook] = useUpdateBookMutation();
  const { refetch } = useGetBooksQuery(undefined);
  const existingBook = bookData?.book;
  const publicationDate = existingBook?.publication_date?.split("T")[0];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBook>();

  const onSubmit: SubmitHandler<IBook> = async (formData) => {
    try {
      if(!auth){
        navigate('/login')
      }
      const res = await updateBook({
        data: formData,
        token,
        id,
      }).unwrap();
      if (res?.status === 200) {
        toast.success("Update successful");
        refetch();
        navigate("/");
      }

      if (res?.status === 401) {
        toast.error("You are not authenticated to update this");
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
      {" "}
      <div className="border-2 w-1/3 border-[#5c6baf] mx-auto rounded-lg h-[60vh] mb-8 p-4">
        <div className="w-full mx-auto">
          <div className="">
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
