/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			container: {
				center: true,
				maxWidth: {
					DEFAULT: "100%",
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1380px",
					"2xl": "1380px",
				},
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
