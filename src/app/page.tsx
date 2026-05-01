"use client"
import { memo } from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link';
import Marquee from '@/components/Marquee';

const collections = [
  { title: 'Wedding Mirrors', },
  { title: 'Engagement Decor',  },
  { title: 'Bouquets',  },
  { title: 'Flower Walls',  },
];

const heroTitleStyle = {
  background: 'linear-gradient(135deg, #f5d0d6 0%, #ec4899 50%, #db2777 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textShadow: '0 10px 30px rgba(245, 208, 214, 0.6)'
} as React.CSSProperties;

const sectionTitleStyle = {
  background: 'linear-gradient(135deg, #f8e4f3 0%, #f8b6e2 50%, #fc9fcf 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as React.CSSProperties;

const Home = memo(function Home() {
  return (
    <div className="bg-gradient-to-br from-white to-blush/30">
      {/* Hero */}
      <section
        className="relative z-20 h-screen flex flex-col items-center justify-center text-center p-8 md:p-16 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: 'url(/imgs/hero-bg.webp)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/20 z-10" />
        <motion.h1
          className="heroo text-[clamp(6.6rem,6vw,6.5rem)] md:text-[clamp(6rem,12vw,8rem)]  leading-none drop-shadow-2xl font-playfair relative z-30"
          style={heroTitleStyle}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Eternal <br /> Love Blossoms
        </motion.h1>

        <motion.p
          className="Ultra mx-auto text-lg md:text-xl lg:text-2xl max-w-2xl md:max-w-4xl md:mb-4 px-4 md:px-8 text-gray-700 font-medium backdrop-blur-sm rounded-3xl p-1 md:p-12 font-inter text-center leading-relaxed relative z-30 mt-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ultra-premium wedding mirrors, engagement decorations, and floral masterpieces for your timeless celebration.
        </motion.p>

        <motion.div
          className="relative z-30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn relative text-center transition-all duration-300 cursor-pointer inline-flex items-center font-mono font-bold text-xl px-20 py-12 rounded-3xl mt-8 bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 shadow-lg hover:shadow-xl">
            <div className="wrapper">
              <h3 className="a text flex gap-2 items-center font-bold text-lg">Shopping <span className="font-black">Now</span></h3>
              <div className="flower flower1">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
              </div>
              <div className="flower flower2">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
              </div>
              <div className="flower flower3">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
              </div>
              <div className="flower flower4">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
              </div>
              <div className="flower flower5">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
              </div>
              <div className="flower flower6">
                <div className="petal one"></div>
                <div className="petal two"></div>
                <div className="petal three"></div>
                <div className="petal four"></div>
              </div>
            </div>
            <svg className="highlight absolute inset-0 w-full h-full" viewBox="0 0 144.75738 77.18431" preserveAspectRatio="none">
              <g transform="translate(-171.52826,-126.11624)">
                <g fill="none" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10">
                  <path d="M180.02826,169.45123c0,0 12.65228,-25.55115 24.2441,-25.66863c6.39271,-0.06479 -5.89143,46.12943 4.90937,50.63857c10.22345,4.2681 24.14292,-52.38336 37.86455,-59.80493c3.31715,-1.79413 -5.35094,45.88889 -0.78872,58.34589c5.19371,14.18125 33.36934,-58.38221 36.43049,-56.91633c4.67078,2.23667 -0.06338,44.42744 5.22574,47.53647c6.04041,3.55065 19.87185,-20.77286 19.87185,-20.77286" />
                </g>
              </g>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>
      </section>

      <Marquee />

      {/* Collections */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-10 md:mb-16 font-playfair"
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Collections
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
          {collections.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src="/imgs/logo.jpeg"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
              
                />
              </div>

              {/* Text and Button */}
              <div className="p-3 md:p-4 text-center">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair">{cat.title}</h3>
                <Link href="/products">
                  <button className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm md:text-base font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
});

export default Home;

