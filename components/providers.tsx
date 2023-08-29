"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import App from "../app/app";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <App>{children}</App>
      </ThemeProvider>
    </NextUIProvider>
  );
}
