import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import cx from "classnames";
import { memo } from "react";
import ThemeToggler from "./theme-toggler";

function Navigation() {
  return (
    <Navbar
      className={cx("bg-white", "dark:bg-darkBlue-50", "shadow-lg")}
      isBlurred={false}
    >
      <NavbarBrand>
        <h1 className={cx("font-black")}>Where In The World?</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggler />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default memo(Navigation);
