/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Car, 
  Bike, 
  Home, 
  Building2, 
  Heart, 
  Smartphone, 
  Plane, 
  Key, 
  Stethoscope, 
  Users, 
  Smile, 
  BarChart3,
  ExternalLink
} from 'lucide-react';

const services = [
  { icon: Car, title: "Seguro Auto & Moto", description: "Proteção completa para seu veículo contra roubo, furto e colisões." },
  { icon: Home, title: "Residencial", description: "O cuidado que o seu lar e sua família merecem com assistência 24h." },
  { icon: Building2, title: "Empresarial", description: "Proteja seu negócio e garanta a continuidade operacional com planos sob medida." },
  { icon: Users, title: "Condomínio", description: "Segurança ampla para prédios comerciais e residenciais com coberturas específicas." },
  { icon: Heart, title: "Seguro de Vida", description: "Individual ou empresarial. Proteção financeira para quem você mais ama." },
  { icon: Smartphone, title: "Equipamentos Portáteis", description: "Seguro para celulares, notebooks e tablets contra danos e roubos." },
  { icon: Plane, title: "Seguro Viagem", description: "Viaje pelo mundo com assistência médica e suporte completo a qualquer hora." },
  { icon: Key, title: "Fiança Locatícia", description: "A solução inteligente para alugar sem fiador e com segurança total." },
  { icon: Stethoscope, title: "Planos de Saúde", description: "Consultoria em planos individuais, familiares, PME e grandes empresas." },
  { icon: Smile, title: "Planos Odontológicos", description: "Sua saúde bucal em dia com as melhores redes credenciadas do país." },
  { icon: BarChart3, title: "Consórcios", description: "A forma inteligente de adquirir seu carro ou imóvel sem pagar juros." },
  { icon: BarChart3, title: "Previdência", description: "Planeje seu futuro com investimentos seguros e rentáveis." },
];

export default function Services() {
  const whatsappUrl = "https://wa.me/5511987207703?text=Olá, quero uma cotação de seguro para: ";

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Soluções Completas de Proteção</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">As melhores coberturas com as maiores seguradoras do mercado. Escolha a sua:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="card-service flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
            </div>
            
            <a 
              href={`${whatsappUrl}${service.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-secondary hover:text-white rounded-xl text-primary font-bold text-sm transition-all border border-gray-100 group"
            >
              COTAR AGORA
              <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
