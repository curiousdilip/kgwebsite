import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/AddBootstrap";
import AddBootstrap from "./components/AddBootstrap";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <AddBootstrap />
        {children}
      </body>
    </html>
  );
}
