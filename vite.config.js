import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = typeof import.meta !== "undefined" && import.meta.env && import.meta.env.MODE === "production";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/Cryptoplace/" : "/", 
});
