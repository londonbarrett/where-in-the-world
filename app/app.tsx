import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const clickHandler = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <div>
      <aside>
        <h1>Where In The World</h1>
        <Button onClick={clickHandler}>
          {theme === "dark" ? "light" : "dark"}
        </Button>
      </aside>
      <main>{children}</main>
    </div>
  );
}
