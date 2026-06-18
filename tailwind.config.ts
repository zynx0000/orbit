import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#15171d",
        mist: "#f4f1eb",
        coral: "#ff6b57",
        sage: "#87a878",
        aqua: "#3caea3",
        plum: "#57467b"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(21, 23, 29, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
