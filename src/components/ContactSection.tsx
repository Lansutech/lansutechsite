
import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const ContactSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#EAF3F3' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-dm-sans text-5xl font-semibold text-gray-900 mb-6">
            Entre em Contato
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco e descobra como podemos colaborar.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-dm-sans text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-medium text-gray-900 mb-1">Email</h4>
                    <p className="font-dm-sans text-gray-600">contato@empresa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-medium text-gray-900 mb-1">Telefone</h4>
                    <p className="font-dm-sans text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-dm-sans font-medium text-gray-900 mb-1">Endereço</h4>
                    <p className="font-dm-sans text-gray-600">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Nome
                    </label>
                    <Input 
                      placeholder="Seu nome"
                      className="font-dm-sans border-gray-200 focus:border-gray-400"
                    />
                  </div>
                  <div>
                    <label className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="font-dm-sans border-gray-200 focus:border-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                    Assunto
                  </label>
                  <Input 
                    placeholder="Assunto da mensagem"
                    className="font-dm-sans border-gray-200 focus:border-gray-400"
                  />
                </div>
                
                <div>
                  <label className="font-dm-sans text-sm font-medium text-gray-700 mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Sua mensagem..."
                    rows={5}
                    className="font-dm-sans border-gray-200 focus:border-gray-400 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full font-dm-sans bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
