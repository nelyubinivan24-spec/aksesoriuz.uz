/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#111827"
        },
        graphite: {
          800: "#2f3742"
        },
        steel: {
          600: "#667085"
        },
        line: {
          200: "#d9dee7"
        },
        mist: {
          100: "#f3f6f8"
        },
        emerald: {
          700: "#047857"
        },
        teal: {
          600: "#0f766e"
        },
        brass: {
          500: "#b8893a"
        },
        clay: {
          600: "#b45309"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px"
      }
    }
  }
};
