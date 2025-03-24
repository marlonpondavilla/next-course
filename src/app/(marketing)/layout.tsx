import '../globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 p-8 text-4xl">Header</header>
        {children}
        <footer className="bg-black p-8 text-3xl">Footer</footer>
      </body>
    </html>
  )
}
