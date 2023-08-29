import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const clickHandler = () => setTheme(theme === "dark" ? "light" : "dark");
  if (!mounted) {
    return null;
  }
  return (
    <Button onClick={clickHandler}>
      {theme === "dark" ? "light" : "dark"}
    </Button>
  );
}

export default ThemeToggler;
