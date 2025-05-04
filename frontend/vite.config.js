import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "http://backend:5000",
			},
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.js',
	  },
});
