const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./react-bricks/**/*.tsx", "./node_modules/react-bricks-ui/dist/*.js"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		theme: {
			flex: { full: "0 0 100%" },
			screens: {
				sm: "414px",
				lg: "1025px",
				"2xl": "1600px",
				tablet: "768px",
				desktop: "1280px",
			},
		},
		extend: {
			colors: {
				blue: { light: "#001464", DEFAULT: "#001464", dark: "#001464" },
				red: { light: "#F00", DEFAULT: "#F00", dark: "#F00" },
				teal: { light: "#00C8FF", DEFAULT: "#00C8FF", dark: "#00C8FF" },
				gray: {
					dark: "#353535",
					DEFAULT: "#505969",
					light: "#DFE3E8",
					lightest: "#F6F7FA",
				},
			},
			gradientColorStops: {
				ocean1: "#007cf0",
				ocean2: "#00dfd8",
				violet1: "#7928ca",
				violet2: "#ff0080",
				sun1: "#ff4d4d",
				sun2: "#f9cb28",
			},
			padding: {
				"1/10": "10%",
			},
			fontFamily: {
				content: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [],
};
