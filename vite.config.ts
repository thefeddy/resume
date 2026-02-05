import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

export default defineConfig({
    base: '/',
    server: {
        allowedHosts: ['']
    },
    plugins: [
        reactRouter(),
        tsconfigPaths(), {
            name: 'ignore-chrome-devtools-json',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url === '/.well-known/appspecific/com.chrome.devtools.json') {
                        res.statusCode = 204; // No Content
                        return res.end();
                    }
                    next();
                });
            },
        },
    ],
    build: {
        outDir: 'build/client',
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'app'),
        },
    },
});
