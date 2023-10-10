/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../redux/features/books/bookApi";
import useAuth from "../hooks/useAuth";
import { IBook } from "../types/globalTypes";
import { Input } from "../components/UI/Input";
import NavBar from "../layouts/NavBar";

export default function AddNewBook() {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();
  const { token } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: IBook) => {
    addBook({ data, token }).then((res) => {
      if (res?.data?.status === 200) {
        reset();
        navigate("/");
        toast(res?.data?.message);
      }
    });
  };
  return (
    <>
      <NavBar />
      <div className="border-2 border-[#5c6baf]">
        <div className="w-1/3 min-h-screen mx-auto">
          <div className="lg:mt-24 pb-16">
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
