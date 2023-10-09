import { useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./UI/Select";
import Banner from "./Banner";
import Deals from "./Deals";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface Option {
  value: string;
  label: string;
}

const SearchBar = () => {
  const {auth}=useAuth()
  const { data ,isLoading} = useGetBooksQuery(undefined);
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
      data?.book?.map((book: IBook) => book?.publication_date?.split("-")[0]) ||
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
  const isFilterActive =
    selectedGenre !== "All Books" ||
    selectedYear !== "All Years" ||
    searchText !== "";
  return (
    <>
    {isLoading?<p className="text-center">Loading...</p>:<>
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
              <Input className="rounded-l-none"
                placeholder="Search Book Here"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
        {
          auth &&<div className="col-span-1">
          <div className="flex justify-center item-center w-1/2 bg-[#4472a3]/90 p-0 text-white hover:bg-[#4472a3] ml-24">
            <Button
              className="w-full border-0 font-bold mr-0"
              variant="outline"
            >
              <Link to="/add-book">Add Book</Link>
            </Button>
          </div>
        </div>
        }
        
      </div>
      {!isFilterActive && <Banner />}
      <Deals searchFilter={filteredBooks} />
    </>}
      
    </>
  );
};

export default SearchBar;
