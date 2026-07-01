import { defineConfig } from "vite";
import type { Plugin, ViteDevServer } from "vite";
import type { IncomingMessage, ServerResponse } from "http";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';


// Servidor de API simples para desenvolvimento
const apiServer = (): Plugin => {
  return {
    name: 'api-server',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/api/contact', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: Buffer | string) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              console.log('📧 Formulário recebido:', data);
              
              setTimeout(() => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                  success: true,
                  message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
                  data: data
                }));
              }, 1000);
            } catch {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({
                success: false,
                message: 'Dados inválidos'
              }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
    open: true,
  },
  preview: {
    host: "localhost",
    port: 4173,
    open: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'development' && apiServer(),
    // Compressão apenas em produção
    mode === 'production' && viteCompression({ algorithm: 'gzip', ext: '.gz', disable: false }),
    mode === 'production' && viteCompression({ algorithm: 'brotliCompress', ext: '.br', disable: false }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/', 
  build: {
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide';
          }
          if (id.includes('node_modules/@radix-ui')) {
            return 'radix-ui';
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
}));
