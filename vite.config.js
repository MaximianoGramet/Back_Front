import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default async ({ command, mode }) => {
  await loadEnv(mode, process.cwd()); // Load environment variables from .env files

  const env = loadEnv(mode, process.cwd()); // Load environment variables again for immediate use

  return defineConfig({
    plugins: [react()],
    server: {
      port: env.VITE_PORT || 3000, // Example usage of an environment variable for port
    },
  });
};
