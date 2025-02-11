import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = import.meta.env.MODE === "production";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/Cryptoplace/" : "/", 
});
