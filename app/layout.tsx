import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Providers from "../components/providers";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Where In The World",
  description: "Bia coding challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
