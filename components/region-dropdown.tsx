"use client";

import { Key, memo } from "react";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
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

function RegionDropdown({ onChange, regions, value }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {value || "Filter by Region"} <Chevron />
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
    </Dropdown>
  );
}

export default memo(RegionDropdown);
