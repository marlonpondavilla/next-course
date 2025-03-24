"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
      <header className="flex justify-around bg-gray-800 p-8 text-white text-4xl">
        <p>Logo</p>
        <ul className="flex items-center text-lg gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return(
              <li key={link.name}>
                <Link href={link.href} className={`transition-colors ease-in  hover:text-purple-400 cursor-pointer ${isActive ? "text-purple-400" : "text-white"} `}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </header>
        {children}
      <footer className="flex bg-blue-800 p-8 justify-center text-4xl">Footer</footer>
      </body>
    </html>
  )
}
