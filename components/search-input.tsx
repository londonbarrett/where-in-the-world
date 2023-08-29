import { Input } from "@nextui-org/input";
import { ChangeEvent, memo } from "react";
import cx from "classnames";
import SearchIcon from "../components/icons/search";

type Props = {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function SearchInput({ onChange, value }: Props) {
  return (
    <Input
      classNames={{
        input: cx("dark:text-white", "dark:placeholder:text-white"),
        inputWrapper: cx("bg-white", "dark:bg-darkBlue-50", "shadow-lg"),
      }}
      onChange={onChange}
      placeholder="Search for a country .."
      startContent={<SearchIcon className="dark:fill-white" />}
      type="text"
      value={value}
    />
  );
}

export default memo(SearchInput);
