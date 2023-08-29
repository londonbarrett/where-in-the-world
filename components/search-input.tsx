import { Input } from "@nextui-org/input";
import SearchIcon from "../components/icons/search";
import { ChangeEvent, memo } from "react";

type Props = {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function SearchInput({ onChange, value }: Props) {
  return (
    <Input
      onChange={onChange}
      placeholder="Search for a country .."
      startContent={<SearchIcon />}
      type="text"
      value={value}
    />
  );
}

export default memo(SearchInput);
