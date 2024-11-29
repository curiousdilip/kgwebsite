import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/AddBootstrap";
import AddBootstrap from "./components/AddBootstrap";
import type { Metadata } from "next";
import Header from "./components/Header";
export const metadata: Metadata = {
  title: "KashmirGuruji",
  description: "Welcome to KashmirGuruJi.Com",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <AddBootstrap />
        <Header />
        {children}
      </body>
    </html>
  );
}
