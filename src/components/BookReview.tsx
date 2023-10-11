// import { ChangeEvent, FormEvent, useState } from "react";

// import { FiSend } from "react-icons/fi";
// import {
//   useAddReviewMutation,
//   useSingleBookQuery,
// } from "../redux/features/books/bookApi";
// import { Button } from "./UI/Button";
// import { Textarea } from "./UI/TextArea";
// import { Avatar, AvatarFallback, AvatarImage } from "./UI/Avatar";

// interface IProps {
//   id: string;
// }

// export default function BookReview({ id }: IProps) {
//   const [inputValue, setInputValue] = useState<string>("");

//   const { data } = useSingleBookQuery(id, {
//     refetchOnMountOrArgChange: true,
//     pollingInterval: 30000,
//   });

//   const [addReview, { isLoading, isError, isSuccess }] = useAddReviewMutation();

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const options = {
//       id: id,
//       data: { review: inputValue },
//     };

//     try {
//       const response = await addReview(options);
//       console.log("Review added successfully:", response.data.book.reviews);
//       setInputValue("");
//     } catch (error) {
//       console.error("Error adding review:", error);
//     }
//   };

//   const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-5 w-2/3">
//       <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
//         <Textarea
//           className="min-h-[30px]"
//           onChange={handleChange}
//           value={inputValue}
//         />
//         <Button
//           type="submit"
//           className="rounded-full h-10 w-10 p-2 text-[25px]"
//         >
//           <FiSend />
//         </Button>
//       </form>
//       <div className="mt-10">
//         {data?.book?.reviews?.map((comment: string, index: number) => (
//           <div key={index} className="flex gap-3 items-center mb-5">
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <p>{comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, ChangeEvent, FormEvent } from "react";
import { FiSend } from "react-icons/fi";
import {
  useAddReviewMutation,
  useSingleBookQuery,
} from "../redux/features/books/bookApi";
import { Button } from "./UI/Button";
import { Textarea } from "./UI/TextArea";
import { Avatar, AvatarFallback, AvatarImage } from "./UI/Avatar";

interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const { data } = useSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [addReview] = useAddReviewMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await addReview({ id, data: { review: inputValue } });
      
      setInputValue("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5 w-2/3">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
          placeholder="Write your review"
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.book?.reviews?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
