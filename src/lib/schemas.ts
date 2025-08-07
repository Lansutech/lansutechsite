import { z } from 'zod';

// Schema de validação para o formulário de contato
export const contactFormSchema = z.object({
  nome: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),
  
  email: z
    .string()
    .email('Formato de email inválido')
    .min(1, 'Email é obrigatório'),
  
  assunto: z
    .string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(200, 'Assunto deve ter no máximo 200 caracteres'),
  
  mensagem: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem deve ter no máximo 1000 caracteres'),
});

// Tipo inferido do schema
export type ContactFormData = z.infer<typeof contactFormSchema>;
