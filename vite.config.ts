/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import tailwindcss from '@tailwindcss/vite'
// only used if using file-based routing
// import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
    // @ts-expect-error manifest does not pass type-check from crxjs
    plugins: [tailwindcss(), react(), crx({ manifest })],
    // plugins: [TanStackRouterVite(), react(), crx({ manifest })],
    test: {},
});
