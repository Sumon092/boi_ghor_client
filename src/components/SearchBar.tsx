// import { useEffect, useState } from "react";
// import { useGetBooksQuery } from "../redux/features/books/bookApi";
// import { IBook } from "../types/globalTypes";
// import { Button } from "./UI/Button";
// import { Input } from "./UI/Input";
// import { Select, SelectContent, SelectItem, SelectTrigger } from "./UI/Select";

// interface Option {
//   value: string;
//   label: string;
// }

// const SearchBar = () => {
//   const { data } = useGetBooksQuery(undefined);
//   const [selectedGenre, setSelectedGenre] = useState("All Books");

//   const filteredBooks =
//     selectedGenre === "All Books"
//       ? data?.book
//       : data?.book?.filter((book: IBook) => book.genre === selectedGenre);

//   useEffect(() => {}, [selectedGenre, data, filteredBooks]);

//   const uniqueGenres = [
//     ...(new Set(
//       (data?.book || []).map((book: IBook) => book.genre as string)
//     ) || []),
//   ];
//   const genreOptions: Option[] = uniqueGenres.map((genre) => ({
//     label: genre as string,
//     value: genre as string,
//   }));

//   const options: Option[] = [
//     { label: "All Books", value: "All Books" },
//     ...genreOptions,
//   ];

//   const handleSelectChange = (value: string) => {
//     setSelectedGenre(value);
//   };

//   return (
//     <>
//       <div className="grid grid-cols-3 mb-8">
//         <div className="col-span-1"></div>
//         <div className="col-span-1">
//           <div className="flex">
//             <div className="w-1/3">
//               <Select value={selectedGenre} onValueChange={handleSelectChange}>
//                 <SelectTrigger>
//                   <button>{selectedGenre}</button>
//                 </SelectTrigger>
//                 <SelectContent>
//                   {options.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="w-2/3">
//               <Input placeholder="Search Book Here" />
//             </div>
//           </div>
//         </div>
//         <div className="col-span-1">
//           <div className="flex justify-center item-center w-1/2 bg-[#4472a3]/90 p-0 text-white hover:bg-[#4472a3] ml-24">
//             <Button
//               className="w-full border-0 font-bold mr-0"
//               variant="outline"
//             >
//               ADD BOOK
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchBar;

// import { useEffect, useState } from "react";
// import { useGetBooksQuery } from "../redux/features/books/bookApi";
// import { IBook } from "../types/globalTypes";
// import { Button } from "./UI/Button";
// import { Input } from "./UI/Input";
// import { Select, SelectContent, SelectItem, SelectTrigger } from "./UI/Select";

// interface Option {
//   value: string;
//   label: string;
// }

// const SearchBar = () => {
//   const { data } = useGetBooksQuery(undefined);
//   const [selectedGenre, setSelectedGenre] = useState("All Books");

//   const [selectedYear, setSelectedYear] = useState("All Years");

//   const filteredBooks = data?.book?.filter((book: IBook) => {
//     if (selectedGenre === "All Books" && selectedYear === "All Years") {
//       return true;
//     }

//     if (selectedGenre !== "All Books" && selectedYear !== "All Years") {
//       return book?.genre === selectedGenre && book?.publication_date === selectedYear;
//     }

//     if (selectedGenre !== "All Books") {
//       return book.genre === selectedGenre;
//     }

//     if (selectedYear !== "All Years") {
//       return book.publication_date === selectedYear;
//     }

//     return true;
//   });

//   const uniqueGenres = [
//     ...(new Set((data?.book || []).map((book: IBook) => book.genre as string)) || []),
//   ];
//   const genreOptions: Option[] = uniqueGenres.map((genre) => ({
//     label: genre as string,
//     value: genre as string,
//   }));

//   const uniqueYears = [
//     ...(new Set((data?.book || []).map((book: IBook) => book.publication_date as string)) || []),
//   ];
//   const yearOptions: Option[] = uniqueYears.map((year) => ({
//     label: year as string,
//     value: year as string,
//   }));

//   const options: Option[] = [
//     { label: "All Books", value: "All Books" },
//     ...genreOptions,
//   ];

//   const handleSelectChange = (value: string, type: "genre" | "year") => {
//     if (type === "genre") {
//       setSelectedGenre(value);
//     } else if (type === "year") {
//       setSelectedYear(value);
//     }
//   };

//   return (
//     <>
//       <div className="grid grid-cols-3 mb-8">
//         <div className="col-span-1"></div>
//         <div className="col-span-1">
//           <div className="flex">
//             <div className="w-1/5">
//               <Select value={selectedGenre} onValueChange={(value) => handleSelectChange(value, "genre")}>
//                 <SelectTrigger>
//                   <button>{selectedGenre}</button>
//                 </SelectTrigger>
//                 <SelectContent>
//                   {options.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="w-1/5">
//               <Select value={selectedYear} onValueChange={(value) => handleSelectChange(value, "year")}>
//                 <SelectTrigger>
//                   <button>{selectedYear}</button>
//                 </SelectTrigger>
//                 <SelectContent>
//                   {yearOptions.map((option) => (
//                     <SelectItem key={option.value} value={option.value}>
//                       {option.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="w-3/5">
//               <Input placeholder="Search Book Here" />
//             </div>
//           </div>
//         </div>
//         <div className="col-span-1">
//           <div className="flex justify-center item-center w-1/2 bg-[#4472a3]/90 p-0 text-white hover:bg-[#4472a3] ml-24">
//             <Button
//               className="w-full border-0 font-bold mr-0"
//               variant="outline"
//             >
//               ADD BOOK
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchBar;

import { useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./UI/Select";

interface Option {
  value: string;
  label: string;
}

const SearchBar = () => {
  const { data } = useGetBooksQuery(undefined);
  const [selectedGenre, setSelectedGenre] = useState("All Books");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [searchText, setSearchText] = useState("");

  const handleSelectChange = (value: string, type: "genre" | "year") => {
    if (type === "genre") {
      setSelectedGenre(value);
    } else if (type === "year") {
      setSelectedYear(value);
    }
  };

  const filteredBooks = data?.book?.filter((book: IBook) => {
    const matchesGenre =
      selectedGenre === "All Books" || book.genre === selectedGenre;
    const matchesYear =
      selectedYear === "All Years" ||
      book.publication_date?.includes(selectedYear);
    const matchesSearch =
      searchText === "" ||
      book?.author?.toLowerCase().includes(searchText.toLowerCase()) ||
      book?.genre?.toLowerCase().includes(searchText.toLowerCase()) ||
      book?.title?.toLowerCase().includes(searchText.toLowerCase());

    return matchesGenre && matchesYear && matchesSearch;
  });

  const uniqueGenres = Array.from(
    new Set(data?.book?.map((book: IBook) => book.genre) || [])
  );
  const genreOptions: Option[] = uniqueGenres.map((genre) => ({
    label: genre as string,
    value: genre as string,
  }));

  const uniqueYears = Array.from(
    new Set(
      data?.book?.map((book: IBook) => book?.publication_date?.split("T")[0]) ||
        []
    )
  );
  const yearOptions: Option[] = uniqueYears.map((year) => ({
    label: year as string,
    value: year as string,
  }));

  const renderOptions = (options: Option[]) =>
    options.map((option) => (
      <SelectItem key={option.value} value={option.value}>
        {option.label}
      </SelectItem>
    ));
  console.log(filteredBooks);
  return (
    <div className="grid grid-cols-3 mb-8">
      <div className="col-span-1"></div>
      <div className="col-span-1">
        <div className="flex">
          <div className="w-1/5">
            <Select
              value={selectedGenre}
              onValueChange={(value) => handleSelectChange(value, "genre")}
            >
              <SelectTrigger>
                <button>{selectedGenre}</button>
              </SelectTrigger>
              <SelectContent>
                {renderOptions([
                  { label: "All Books", value: "All Books" },
                  ...genreOptions,
                ])}
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/5">
            <Select
              value={selectedYear}
              onValueChange={(value) => handleSelectChange(value, "year")}
            >
              <SelectTrigger>
                <button>{selectedYear}</button>
              </SelectTrigger>
              <SelectContent>
                {renderOptions([
                  { label: "All Years", value: "All Years" },
                  ...yearOptions,
                ])}
              </SelectContent>
            </Select>
          </div>
          <div className="w-3/5">
            <Input
              placeholder="Search Book Here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex justify-center item-center w-1/2 bg-[#4472a3]/90 p-0 text-white hover:bg-[#4472a3] ml-24">
          <Button className="w-full border-0 font-bold mr-0" variant="outline">
            ADD BOOK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
