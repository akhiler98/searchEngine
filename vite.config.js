import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/searchEngine/',
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js','resources/js/Search.jsx'],
            refresh: true,
        }),
        react()
    ],
    build: {
        outDir: 'public/build',
        assetsDir: '',
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.jsx',
        },
    },
});
