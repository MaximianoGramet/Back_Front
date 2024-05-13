import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default async ({ command, mode }) => {
  await loadEnv(mode, process.cwd()); // Load environment variables from .env files

  const env = process.env; // Access loaded environment variables

  return defineConfig({
    plugins: [react()],
    server: {
      host: "0.0.0.0", // Listen on all available network interfaces
      port: env.PORT || 3000, // Use the PORT environment variable, if available, or fallback to 3000
    },
  });
};
