import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '../lib/schemas';
import { sendContactForm } from '../lib/api';
import { toast } from 'sonner';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await sendContactForm(data);
      
      if (response.success) {
        setSubmitStatus('success');
        toast.success(response.message);
        form.reset();
      } else {
        setSubmitStatus('error');
        toast.error(response.message || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Erro inesperado. Tente novamente.');
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    submitStatus,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
