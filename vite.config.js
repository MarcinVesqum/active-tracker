import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
      plugins: [vue(), svgLoader()],
      'process.env.VITE_SUPABASE_URL': process.env.VITE_SUPABASE_URL,
      'process.env.VITE_SUPABASE_ANON_KEY': process.env.VITE_SUPABASE_ANON_KEY,
  });

}