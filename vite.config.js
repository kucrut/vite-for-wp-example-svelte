import { v4wp } from "@kucrut/vite-for-wp";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default {
	plugins: [svelte(), v4wp({ input: "app/src/main.js", outDir: "app/dist" })],
};
