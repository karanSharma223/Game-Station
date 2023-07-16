import { Navbar,Footer } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Game Ecom',
  description: 'Buy and Sell used games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShoppingCartProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ShoppingCartProvider>
      </body>
    </html>
  )
}
