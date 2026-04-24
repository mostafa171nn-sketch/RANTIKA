import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'
import Navbar from "@/components/Navbar";
import BottoNavbar from '@/components/BottoNavbar';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import MiniSideCart from '@/components/MiniSideCart';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap'
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
        {/* SVG Background Layer - lightweight, no heavy filters */}
        <svg
          className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 2000"
          aria-hidden="true"
        >
          <defs>
            <filter id="handDrawnNoise" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
          </defs>
        </svg>

        <CartProvider>
          <WishlistProvider>
            {/* Navbar - rendered once */}
            <Navbar />

            {/* Page Content */}
            <main className="relative">
              {children}
              <MiniSideCart />
            </main>

            <BottoNavbar />
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
