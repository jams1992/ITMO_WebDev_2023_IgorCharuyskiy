import {defineConfig} from'vite';
import mkcert from'vite-plugin-mkcert';


export default defineConfig({
  server: {
    port: 8888,
    https: true,
    host: 'local.dev',
  },
  plugins: [mkcert()]
});