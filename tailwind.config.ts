import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blush: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#f5d0d6',
          600: '#f3c9d1',
          700: '#f8e2e8',
          800: '#fce7f3',
          900: '#fdf2f8',
          DEFAULT: '#f5d0d6',
        },
        rose: {
          50: '#fdf4f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          DEFAULT: '#f3c9d1',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "bounce-slow": "bounce 4s infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translate3d(0,0,0)',
          },
          '50%': {
            transform: 'translate3d(0,-20px,0)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 20px 0 rgb(245 208 214 / 0.4)',
          },
          '100%': {
            boxShadow: '0 0 40px 0 rgb(245 208 214 / 0.8)',
          },
        },
      },
    },
  },
  
}
export default config
