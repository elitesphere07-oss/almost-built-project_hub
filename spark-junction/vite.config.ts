import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'   // ✅ switched to SWC version
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // DEVELOPMENT: Configure server for network-wide access during team testing
  // PRODUCTION: Remove or modify these settings for production deployment
  server: {
    // Bind to all network interfaces for team access
    host: '0.0.0.0',
    port: 8080,
    // Allow connections from any IP on the network
    strictPort: true,
    // Enable CORS for development
    cors: true,
  },
  // DEVELOPMENT: Enable source maps for debugging
  // PRODUCTION: Disable for performance
  build: {
    sourcemap: process.env.NODE_ENV !== 'production',
  },
})
