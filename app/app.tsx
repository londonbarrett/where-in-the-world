import ThemeToggler from "@/components/theme-toggler";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <div>
      <aside>
        <h1>Where In The World</h1>
        <ThemeToggler />
      </aside>
      <main>{children}</main>
    </div>
  );
}
