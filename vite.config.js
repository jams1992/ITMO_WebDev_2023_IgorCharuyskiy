import mkcert from "vite-plugin-mkcert";
export default {
  server: {
    port: 8888,
    https: true,
    host: "local.dev",
  },
  plugins: [mkcert()],
};
