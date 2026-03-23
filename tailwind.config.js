module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "var(--app-bg)",
          fg: "var(--app-fg)",
          muted: "var(--app-fg-muted)",
          border: "var(--app-border)",
          surface: "var(--app-surface)",
          elevated: "var(--app-surface-elevated)",
          link: "var(--app-link)",
          accent: "var(--app-accent)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
