import { DM_Sans, Dela_Gothic_One, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
});

const ClashDisplay = localFont({
  variable: "--cd",
  preload: true,
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Bold.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../../public/fonts/ClashDisplay-Extralight.otf",
      weight: "10",
      style: "extra-light",
    },
    {
      path: "../../public/fonts/ClashDisplay-Light.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.otf",
      weight: "300",
      style: "medium",
    },
    {
      path: "../../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.otf",
      weight: "500",
      style: "semi-bold",
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${ClashDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
