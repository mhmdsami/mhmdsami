/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
        },
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          hover: "var(--primary-hover)",
        },
        destructive: "var(--destructive)",
        warning: "var(--warning)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["var(--font-geist-mono)", "ui-monospace", "SF Mono", "Menlo", "monospace"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1.45" }],
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.8125rem", { lineHeight: "1.5" }],
        base: ["0.875rem", { lineHeight: "1.6" }],
        lg: ["1rem", { lineHeight: "1.5" }],
        xl: ["1.125rem", { lineHeight: "1.4" }],
        "2xl": ["1.5rem", { lineHeight: "1.25" }],
        "3xl": ["1.875rem", { lineHeight: "1.1" }],
        "4xl": ["2.5rem", { lineHeight: "1.02" }],
        "5xl": ["3.25rem", { lineHeight: "1" }],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      maxWidth: {
        content: "42rem",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        "in-out": "var(--ease-in-out)",
      },
      boxShadow: {
        card: "inset 0 1px 0 0 rgb(255 255 255 / 3%), 0 18px 50px -30px rgb(0 0 0 / 90%)",
        overlay: "inset 0 1px 0 0 rgb(255 255 255 / 4%), 0 24px 60px -20px rgb(0 0 0 / 75%)",
      },
    },
  },
  plugins: [],
};
