import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const port = import.meta.env.VITE_PORT;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
  },
});
