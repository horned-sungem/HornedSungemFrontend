import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from 'vite-plugin-eslint';
import ViteFonts from 'vite-plugin-fonts';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [
        reactRefresh(),
        eslintPlugin({
            include: 'src/**/*.+(js|jsx)',
            fix: true,
        }),
        ViteFonts({
            google: {
                families: [
                    {
                        name: 'Karla',
                        styles: 'wght@400;700',
                    },
                    {
                        name: 'Lato',
                        styles: 'wght@400;700;900',
                    },
                ],
            },
        }),
        minifyHtml(),
        injectHtml({
            injectData: {
                commitHash: require('child_process')
                    .execSync('git rev-parse HEAD')
                    .toString()
                    .trim(),
            },
        }),
    ],
});
