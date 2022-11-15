import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, "env");

  const htmlPlugin = () => {
    return {
      name: "html-transform",
      transformIndexHtml(html: string) {
        return html.replace(/%(.*?)%/g, function (match, p1) {
          return env[p1];
        });
      },
    }
  }
  return {
    plugins: [
      htmlPlugin(),
      react(),
      viteTsconfigPaths(),
      svgrPlugin()
    ]
  }
});
