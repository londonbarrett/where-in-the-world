"use client";

import { memo } from "react";
import { Button } from "@nextui-org/button";
import {
  Dropdown as NUIDropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Selection } from "@nextui-org/react";
import Chevron from "./icons/chevron";

type Props = {
  onChange: (keys: Selection) => void;
  regions: string[];
  value?: Selection;
};

function Dropdown({ onChange, regions, value }: Props) {
  return (
    <NUIDropdown className="dark:bg-darkBlue-50">
      <DropdownTrigger>
        <Button
          className="bg-white dark:bg-darkBlue-50 capitalize justify-between shadow-lg"
          variant="solid"
          endContent={<Chevron className="dark:fill-white" />}
        >
          {value || "Filter by Region"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Filter by Region"
        disallowEmptySelection
        onSelectionChange={onChange}
        selectedKeys={value}
        selectionMode="single"
        variant="flat"
      >
        {regions.map((region) => (
          <DropdownItem key={region}>{region}</DropdownItem>
        ))}
      </DropdownMenu>
    </NUIDropdown>
  );
}

export default memo(Dropdown);
