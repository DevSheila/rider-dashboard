import { Input } from "@/components/ui/input";
const SearchBar = ({ search, onSearch }) => {
  return (
    <Input
      type="text"
      placeholder="Search ..."
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      className="mb-4 dark:outline"
    />
  );
};

export default SearchBar;

