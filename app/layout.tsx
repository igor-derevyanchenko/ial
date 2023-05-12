import "./globals.css";
import { Montserrat } from "next/font/google";
import IALProvider from "./IALProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "IAL",
  description: "Igor's Anime List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IALProvider>
      <html lang="en" data-theme="dracula">
        <body className={montserrat.className}>{children}</body>
      </html>
    </IALProvider>
  );
}
