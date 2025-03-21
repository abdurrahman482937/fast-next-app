import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Fast Next App",
  description: "Generated by create abdurrahman482937",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-10`}
      >
        <nav className="flex list-none gap-20 text-xl items-center justify-center mb-5">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/posts">
            <li>Posts</li>
          </Link>
          <Link href="/image">
            <li>Image</li>
          </Link>
          <Link href="/dynamic">
            <li>Dynamic</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </nav>
        <hr className="mb-15"></hr>
        {children}
      </body>
    </html>
  );
}
