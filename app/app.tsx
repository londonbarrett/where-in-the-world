import Navigation from "@/components/navigation";
import cx from "classnames";
import { ReactNode } from "react";

export default function App({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navigation />
      <main className={cx("container", "mx-auto", "px-6", "py-10")}>
        {children}
      </main>
    </div>
  );
}
