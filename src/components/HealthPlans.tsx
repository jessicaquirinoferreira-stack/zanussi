/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Stethoscope, CheckCircle2, MessageCircle } from 'lucide-react';

const partners = [
  "Unimed", "Bradesco Saúde", "SulAmérica", "Porto Seguro Saúde", "Alice Saúde", "Amil", "Hapvida NotreDame Intermédica"
];

export default function HealthPlans() {
  const whatsappUrl = "https://wa.me/5511987207703?text=Olá, quero simular um plano de saúde";

  return (
    <section id="planos-saude" className="bg-gray-50 section-padding">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Stethoscope size={16} />
            <span>Planos de Saúde & Odontológicos</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Especialistas em Planos de Saúde (PF e PJ)
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Oferecemos consultoria especializada para encontrar o plano ideal. Trabalhamos com planos para pessoa física, familiar e empresarial (inclusive Microempreendedor Individual - MEI).
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              "Planos Individuais",
              "Planos Familiares (MEI)",
              "Empresarial (Pequeno e Médio)",
              "Grandes Corporações"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-700 font-medium">
                <CheckCircle2 size={18} className="text-secondary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 py-5 px-10 text-lg"
          >
            <MessageCircle size={24} />
            SIMULAR PLANO NO WHATSAPP
          </a>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16" />
          
          <h3 className="text-xl font-bold text-primary mb-8 border-b pb-4">Nossas Parcerias</h3>
          
          <div className="flex flex-wrap gap-4">
            {partners.map((partner) => (
              <div 
                key={partner} 
                className="bg-gray-50 border border-gray-100 px-5 py-3 rounded-xl text-gray-600 font-bold hover:border-secondary hover:text-secondary transition-all cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 p-6 rounded-2xl border border-blue-100 italic text-gray-600 leading-relaxed">
            "A Zanussi Seguros nos ajudou a reduzir o custo do nosso plano empresarial em 25% sem perder qualidade no atendimento."
            <div className="mt-4 not-italic font-bold text-primary text-sm">— Diretor da TechFlow Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
