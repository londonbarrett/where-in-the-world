import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { memo, useEffect, useState } from "react";
import Moon from "@/components/icons/moon";
import Sun from "@/components/icons/sun";

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
    <Button
      onClick={clickHandler}
      variant="light"
      isIconOnly
      aria-label={theme === "dark" ? "light" : "dark"}
    >
      {theme === "dark" ? <Sun className="fill-white" /> : <Moon />}
    </Button>
  );
}

export default memo(ThemeToggler);
