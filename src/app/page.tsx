import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <header className="flex justify-around bg-gray-800 p-8 text-white text-4xl">
        <p>Logo</p>
        <ul className="flex items-center text-lg gap-4">
          <Link href={"/"} className="hover:text-purple-400 cursor-pointer">Home</Link>
          <Link href={"/about"} className="hover:text-purple-400 cursor-pointer">About</Link>
          <Link href={"/products"} className="hover:text-purple-400 cursor-pointer">Products</Link>
          <Link href={"/contact"} className="hover:text-purple-400 cursor-pointer">Contact</Link>
        </ul>
      </header>
      <article className="flex justify-center items-center h-screen">
        <h1>Home Page</h1>
      </article>
      <footer className="flex bg-blue-800 p-8 justify-center text-4xl">Footer</footer>
    </main>
  );
}
