import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./UI/Select";

const SearchBar = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  const selectedValue = "All Books";
  return (
    <div className="grid grid-cols-3 mb-8">
      <div className="col-span-1"></div>
      <div className="col-span-1">
        <div className="flex">
          <div className="w-1/3">
            <Select >
              <SelectTrigger>
                <button>{selectedValue}</button>
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-2/3">
            <Input  placeholder="Search Book Here" />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex justify-center item-center w-1/2 bg-[#4472a3]/90 p-0 text-white  hover:bg-[#4472a3] ml-24">
          <Button className="w-full border-0 font-bold mr-0" variant="outline">
            ADD BOOK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
