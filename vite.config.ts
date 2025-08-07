import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
              
              // Simula processamento
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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // --- ADICIONE ESTA LINHA ---
  // Substitua 'nome-do-seu-repositorio' pelo nome do seu repositório no GitHub.
  // Mantenha as barras no início e no final.
  base: '/lansutechsite/', 
  // ---------------------------
}));