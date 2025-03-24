import Link from "next/link"

export const metadata = {
  title: 'Dashboard',
  description: '',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header className="flex justify-around bg-gray-800 p-8 text-white text-4xl">
        <p>Logo</p>
        <ul className="flex items-center text-lg gap-4">
          <Link href={"/"} className="hover:text-purple-400 cursor-pointer">Home</Link>
          <Link href={"/about"} className="hover:text-purple-400 cursor-pointer">About</Link>
          <Link href={"/products"} className="hover:text-purple-400 cursor-pointer">Products</Link>
          <Link href={"/contact"} className="hover:text-purple-400 cursor-pointer">Contact</Link>
        </ul>
      </header>
        {children}
      <footer className="flex bg-blue-800 p-8 justify-center text-4xl">Footer</footer>
      </body>
    </html>
  )
}
