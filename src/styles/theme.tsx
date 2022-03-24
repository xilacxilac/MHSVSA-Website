/* eslint-disable import/no-default-export */
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const theme: ThemeConfig = extendTheme({
	colors: {
		brand: {
			primary: "white",
			secondary: "#171a23",
		},
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "white",
				lineHeight: "base",
				padding: 0,
				margin: 0,
				backgroundColor: "brand.secondary",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "gray.100"
				// background: "transparent", MAYBE CHANGE LATER
			},
			"&::-webkit-scrollbar-thumb": {
				// background: "brand.primary", MAYBE CHANGE LATER
				background: "gray.400",
				borderRadius: "50px",
			},
		}),
	},
	config: {
		initialColorMode: "light", // TEMPORARILY SET TO "light" over "system"
		useSystemColorMode: "false",
	},
});

export default theme;
