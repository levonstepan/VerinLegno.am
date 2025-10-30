import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VerinLegno Armenia | ՎերինԼենյո Հայաստան",
  description:
    "Roots Furniture LLC — պաշտոնական ներկայացուցիչ VerinLegno-ի համար Հայաստանում։ Իտալական բարձր տեխնոլոգիաների ծածկանյութեր փայտի, մետաղի և ապակու համար։",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
