import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import EnvironmentPlugin from 'vite-plugin-environment';
// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

	return defineConfig({
		plugins: [
			vue(),
			svgLoader(),
			EnvironmentPlugin('all', { prefix: 'VITE_SUPABASE_' }),
		],
	});
};
