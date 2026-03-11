import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';


// Servidor de API simples para desenvolvimento
const apiServer = () => {
  return {
    name: 'api-server',
    configureServer(server: any) {
      server.middlewares.use('/api/contact', (req: any, res: any, next: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
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
            } catch (error) {
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
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'development' && apiServer(),
    // Plugins de otimização para produção
    viteCompression({ algorithm: 'gzip', ext: '.gz', disable: false }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br', disable: false }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/', 
  build: {
    minify: 'esbuild', // Padrão do Vite, mas explicitado para clareza
    sourcemap: false,  // Desabilita sourcemaps em produção
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'], // Exemplo de code splitting
          lucide: ['lucide-react'], // Outro exemplo
        },
      },
    },
  },
}));