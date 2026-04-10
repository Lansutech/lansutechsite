// Importando tipos do schema
import { ContactFormData } from './schemas';
import emailjs from '@emailjs/browser';

// Resposta da API
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Configuração do EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_bgy59cg', // Substitua pelo seu Service ID
  TEMPLATE_ID: 'template_6ghchgh', // Substitua pelo seu Template ID
  PUBLIC_KEY: 'BUCwJkUnvWYhAxAn5', // Substitua pela sua Public Key
};

// Função para enviar o formulário de contato via EmailJS
export const sendContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  try {
    // Verifica se as configurações estão definidas
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('⚠️ EmailJS não configurado. Usando modo de desenvolvimento.');
      }
      return await sendContactFormDev(formData);
    }

    // Prepara os dados para o template do EmailJS
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      subject: formData.assunto,
      message: formData.mensagem,
      to_name: 'Lansutech', // Nome que aparecerá no email
    };

    // Envia o email via EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (process.env.NODE_ENV === 'development') {
      console.log('[Dev] Email enviado com sucesso:', response);
    }
    
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      data: formData
    };

  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Dev] Erro ao enviar email:', error);
    }
    
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.',
    };
  }
};

// Função de fallback para desenvolvimento
const sendContactFormDev = async (formData: ContactFormData): Promise<ApiResponse> => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Dev] Formulário enviado (modo desenvolvimento):', formData);
  }
  
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    data: formData
  };
};

// Função para configurar EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};
