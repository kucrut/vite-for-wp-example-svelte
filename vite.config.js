import create_config from "@kucrut/vite-for-wp";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default create_config("app/src/main.js", "app/dist", {
	plugins: [svelte()],
});
