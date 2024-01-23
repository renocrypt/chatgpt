import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/bars/NavBar";
import Copyright from "@/components/bars/Copyright";
import CookieCard from "@/components/cards/CookieCard";

export const metadata: Metadata = {
  title: "GPTs - Renocrypt",
  description: "Custom GPTs, Tailored to your needs, Crafted by Renocrypt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="bg-green-100 font-Rsans" data-theme="light">
        <NavBar />
        {children}
        <CookieCard />
        <Copyright />
      </body>
    </html>
  );
}
