import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "rumPUREE Dance Studio | Join The Incredible World of Dance",
  description: "Redesign of rumPUREE Dance Studio. Explore our premier dance styles: Ballet, Salsa, Bachata, Argentine Tango, Hip Hop, and Pole Dance. Visit our Asok & Samyan branches today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body
        className="font-sans antialiased text-gray-800 bg-white"
      >
        {children}
      </body>
    </html>
  );
}
