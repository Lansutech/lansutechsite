import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, Variants, useMotionValue } from 'framer-motion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
// import RevealOnScroll from './RevealOnScroll'; // Removido, pois não é mais necessário
import { useContactForm } from '../hooks/use-contact-form';

const ContactSection = () => {
  const { 
    form, 
    isSubmitting, 
    submitStatus, 
    onSubmit 
  } = useContactForm();
  const { register, formState: { errors } } = form;

  return (
    // Adicionado o ID para o botão "Contato"
    <section id="contato" className="py-16 md:py-24" style={{ backgroundColor: '#F0F7F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Parágrafo - Removido RevealOnScroll */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-dm-sans text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Entre em Contato Conosco
          </h2>
          <p className="font-dm-sans text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para impulsionar a sua empresa. Preencha o formulário abaixo ou utilize nossos canais de comunicação diretos.
          </p>
        </div>
        
        {/* Contact Grid - Removido RevealOnScroll nos containers principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Contact Info (Lado Esquerdo) - Itens internos ainda podem usar motion.div se desejado, mas o container direto não anima em scroll */}
          <div className="space-y-10">
            <h3 className="font-dm-sans text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Canais de Atendimento
            </h3>

            <div className="space-y-8">
              {/* Item de Email - Mantido motion.div para futuras animações ou transições internas, se necessário */}
              <motion.div 
                className="flex items-start space-x-6"
                // Variantes removidas aqui se não houver animação de stagger controlada externamente
                // ou se as animações forem apenas de estado interno (como hover, click)
              >
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Email</h4>
                  <p className="font-dm-sans text-gray-700 text-base break-words">lansutech@gmail.com</p>
                </div>
              </motion.div>

              {/* Item de Telefone - Mantido motion.div */}
              <motion.div 
                className="flex items-start space-x-6"
                // Variantes removidas
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Telefone / WhatsApp</h4>
                  <p className="font-dm-sans text-gray-700 text-base">+55 (44) 99741-5544</p>
                </div>
              </motion.div>

              {/* Item de Localização - Mantido motion.div */}
              <motion.div 
                className="flex items-start space-x-6"
                // Variantes removidas
              >
                 <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                 </div>
                 <div>
                    <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Localização</h4>
                    <p className="font-dm-sans text-gray-700 text-base">Paranavaí, Paraná - Brasil</p>
                 </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form (Lado Direito) - Removido RevealOnScroll */}
          <Card className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
            <CardContent className="p-0">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Inputs do Formulário */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      {...register('nome')}
                      placeholder="Seu nome completo"
                      className={`font-dm-sans border rounded-md px-4 py-2 text-base shadow-sm ${
                        errors.nome 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.nome && (
                      <p className="text-red-500 text-sm mt-1 font-dm-sans">{errors.nome.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Email Profissional *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="seu@empresa.com"
                      className={`font-dm-sans border rounded-md px-4 py-2 text-base shadow-sm ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 font-dm-sans">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                    Assunto *
                  </label>
                  <Input
                    id="assunto"
                    {...register('assunto')}
                    placeholder="Assunto da mensagem"
                    className={`font-dm-sans border rounded-md px-4 py-2 text-base shadow-sm ${
                      errors.assunto 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.assunto && (
                    <p className="text-red-500 text-sm mt-1 font-dm-sans">{errors.assunto.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mensagem" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                    Sua Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    {...register('mensagem')}
                    placeholder="Descreva suas necessidades ou dúvidas aqui..."
                    rows={6}
                    className={`font-dm-sans border rounded-md px-4 py-2 resize-y text-base shadow-sm ${
                      errors.mensagem 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.mensagem && (
                    <p className="text-red-500 text-sm mt-1 font-dm-sans">{errors.mensagem.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-dm-sans bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:transform-none disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Mensagem Enviada!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Tentar Novamente
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer da seção de contato / Direitos Autorais - Removido RevealOnScroll */}
        <div className="border-t border-gray-200 mt-16 pt-8 text-center">
          <div className="text-sm text-gray-500 flex items-center justify-center">
            <div className="w-7 h-7 mr-2 flex-shrink-0">
              <img src={import.meta.env.BASE_URL + 'imgs/lansutechlogo.png'} alt="Lansutech" className="w-full h-full object-contain" />
            </div>
            © {new Date().getFullYear()} Lansutech. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
