
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(0, 0%, 89%)",
        input: "hsl(0, 0%, 89%)",
        ring: "hsl(240, 5.9%, 10%)",
        background: "hsl(0, 0%, 100%)", // Pure white background
        foreground: "hsl(240, 10%, 3.9%)", // Very dark text for contrast
        primary: {
          DEFAULT: "#7E69AB", // Soft purple
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#A0AEC0", // Soft gray-blue
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#E53E3E", // Soft red
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F7FAFC", // Very light gray-blue
          foreground: "#4A5568",
        },
        accent: {
          DEFAULT: "#EDF2F7", // Light gray
          foreground: "#2D3748",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#2D3748",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2D3748",
        },
        wellness: {
          blue: {
            light: "#E6F2FF",
            DEFAULT: "#4299E1",
            dark: "#2C5282"
          },
          green: {
            light: "#F0FFF4",
            DEFAULT: "#48BB78",
            dark: "#276749"
          },
          purple: {
            light: "#FAF5FF",
            DEFAULT: "#9F7AEA",
            dark: "#6B46C1"
          },
          neutral: {
            light: "#F7FAFC",
            DEFAULT: "#A0AEC0",
            dark: "#4A5568"
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'breathe-in': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'breathe-in': 'breathe-in 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

