// src/components/ContactSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const ContactSection = () => {
  return (
    // Adicionado o ID para o botão "Contato"
    <section id="contato" className="py-16 md:py-24" style={{ backgroundColor: '#F0F7F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll type="slide" direction="up" delay={0.1} duration={0.8} threshold={0.4}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-dm-sans text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Entre em Contato Conosco
            </h2>
            <p className="font-dm-sans text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para impulsionar a sua empresa. Preencha o formulário abaixo ou utilize nossos canais de comunicação diretos.
            </p>
          </div>
        </RevealOnScroll>
        

        {/* Contact Grid - Cada coluna animando separadamente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Contact Info (Lado Esquerdo) - Revelar com stagger para os itens */}
          <RevealOnScroll type="slide" direction="left" delay={0.3} duration={0.8} staggerChildren={0.15} staggerDelay={0.1} threshold={0.2}>
            <div className="space-y-10">
              <h3 className="font-dm-sans text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                Canais de Atendimento
              </h3>

              <div className="space-y-8">
                {/* Item de Email */}
                <motion.div // << Aqui você usa 'motion.div'
                  className="flex items-start space-x-6"
                  variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} // Animação customizada para o stagger
                >
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Email</h4>
                    <p className="font-dm-sans text-gray-700 text-base break-words">contato@lansutech.com</p>
                  </div>
                </motion.div>

                {/* Item de Telefone */}
                <motion.div // << Aqui você usa 'motion.div'
                  className="flex items-start space-x-6"
                  variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} // Animação customizada para o stagger
                >
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Telefone / WhatsApp</h4>
                    <p className="font-dm-sans text-gray-700 text-base">+55 (44) 99999-9999</p>
                  </div>
                </motion.div>

                {/* Item de Localização */}
                <motion.div // << Aqui você usa 'motion.div'
                  className="flex items-start space-x-6"
                  variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} // Animação customizada para o stagger
                >
                  
                </motion.div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form (Lado Direito) - Revelar como um bloco */}
          <RevealOnScroll type="slide" direction="right" delay={0.4} duration={0.8} threshold={0.3}>
            <Card className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8">
              <CardContent className="p-0">
                <form
                  className="space-y-6"
                  action="https://formsubmit.co/AdicioneAqui@gmail.com"
                  method="POST"
                >
                  {/* Campos ocultos de controle do FormSubmit */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="os emails só é enviado se tiver o link de uma página estática aqui" />
                  <input type="hidden" name="_honey" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                        Nome Completo
                      </label>
                      <Input
                        id="nome"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                        className="font-dm-sans border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md px-4 py-2 text-base shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                        Email Profissional
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="seu@empresa.com"
                        required
                        className="font-dm-sans border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md px-4 py-2 text-base shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Assunto
                    </label>
                    <Input
                      id="assunto"
                      name="subject"
                      placeholder="Assunto da mensagem"
                      required
                      className="font-dm-sans border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md px-4 py-2 text-base shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Sua Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="message"
                      placeholder="Descreva suas necessidades ou dúvidas aqui..."
                      rows={6}
                      required
                      className="font-dm-sans border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md px-4 py-2 resize-y text-base shadow-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-dm-sans bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>

        {/* Footer da seção de contato / Direitos Autorais - Revelar como um bloco */}
        <RevealOnScroll type="fade" delay={0.6} duration={0.8} threshold={0.5}>
          <div className="border-t border-gray-200 mt-16 pt-8 text-center">
            <div className="text-sm text-gray-500 flex items-center justify-center">
              <div className="w-7 h-7 mr-2 flex-shrink-0">
                <img src={import.meta.env.BASE_URL + 'imgs/lansutechlogo.png'} alt="Lansutech" className="w-full h-full object-contain" />
              </div>
              © {new Date().getFullYear()} Lansutech. Todos os direitos reservados.
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ContactSection;