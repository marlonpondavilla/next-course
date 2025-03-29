import React from "react";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  })
  return (
    <main className="bg-white text-black">
      <article className="flex justify-center items-center h-screen">
        <h1>Home Page</h1>
      </article>
    </main>
  );
}
