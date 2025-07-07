import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

// Importe os ícones que você deseja usar (ex: de uma biblioteca como Lucide React ou React Icons)
// Exemplo com Lucide React (se você tiver instalado 'lucide-react'):
// import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F0F7F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <p className="font-dm-sans text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar a sua empresa a alcançar novos patamares. Preencha o formulário ou use os canais abaixo para falar conosco.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Contact Info (Lado Esquerdo) */}
          <div className="space-y-10">
            <div>
              <h3 className="font-dm-sans text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                Converse Conosco
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    {/* Se estiver usando Lucide React: <Mail className="w-7 h-7" /> */}
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Email</h4>
                    <p className="font-dm-sans text-gray-700 text-base break-words">lansutech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    {/* Se estiver usando Lucide React: <Phone className="w-7 h-7" /> */}
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Telefone</h4>
                    <p className="font-dm-sans text-gray-700 text-base">(44) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    {/* Se estiver usando Lucide React: <MapPin className="w-7 h-7" /> */}
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-semibold text-lg text-gray-900 mb-1">Localização</h4>
                    <p className="font-dm-sans text-gray-700 text-base">Rua da Inovação, 123, Bairro Tech, São Paulo - SP, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* O bloco do mapa foi REMOVIDO daqui */}

          </div>

          {/* Contact Form (Lado Direito) */}
          <Card className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 md:p-8">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Nome Completo
                    </label>
                    <Input
                      id="nome"
                      placeholder="Seu nome completo"
                      className="font-dm-sans border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-md px-4 py-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Email Profissional
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="font-dm-sans border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-md px-4 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                    Assunto
                  </label>
                  <Input
                    id="assunto"
                    placeholder="Assunto da mensagem"
                    className="font-dm-sans border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-md px-4 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                    Sua Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva suas necessidades ou dúvidas aqui..."
                    rows={6}
                    className="font-dm-sans border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-md px-4 py-2 resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-dm-sans bg-gray-900 hover:bg-gray-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer da seção de contato / Direitos Autorais */}
        <div className="border-t border-gray-200 mt-16 pt-8 text-center">
          <div className="text-sm text-gray-500 flex items-center justify-center">
            <div className="w-7 h-7 mr-2">
              <img src="/imgs/lansutechlogo.png" alt="Lansutech Logo" className="w-full h-full object-contain" />
            </div>
            © {new Date().getFullYear()} Lansutech. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;