import { Navbar, Footer }from '@/components'
import './globals.css'

export const metadata = {
  title: 'Mad max cars to rent',
  description: 'Půjčte si auto a pojďte bojovat o každou kapku benzínu!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
