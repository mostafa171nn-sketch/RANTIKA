import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'
import Navbar from "@/components/Navbar";
import BottoNavbar from '@/components/BottoNavbar';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import MiniSideCart from '@/components/MiniSideCart'; 
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['800', '500', '600', '700', '800'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Eternal Love Blossoms - Premium Wedding Decor',
  description: 'Ultra-premium wedding mirrors, engagement decorations, and floral masterpieces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 min-h-screen relative overflow-x-hidden`}
      >
        
        
        {/* SVG Background Layer */}
        <svg
          className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 2000"
        >
          <defs>
            <filter id="handDrawnNoise" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="8" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
          </defs>
        </svg>

        {/* Navbar */}
        <Navbar />

         

        {/* Page Content */}
        <main className=" relative  ">
           <Navbar/>
          <CartProvider>
            <WishlistProvider>
              {children}
              <MiniSideCart />
            </WishlistProvider>
          </CartProvider>
          <BottoNavbar/>
        </main>
        <Footer />
      </body>
    </html>
  )
}
