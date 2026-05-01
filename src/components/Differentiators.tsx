/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Clock, ShieldCheck, Trophy, Sparkles, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: Users, title: "Pós-venda Diferenciado", desc: "Suporte e assessoria completa sobre o perfil do seu contrato." },
  { icon: ShieldCheck, title: "Ética e Transparência", desc: "Trabalhamos com clareza em todas as etapas da cotação." },
  { icon: Trophy, title: "Mais de 30 anos", desc: "Experiência e confiança no mercado com atendimento em todo o Brasil." },
  { icon: Clock, title: "Agilidade no Atendimento", desc: "Respostas rápidas visando sempre a melhor oferta para você." },
  { icon: Sparkles, title: "Amplo Portfólio", desc: "Variedade de produtos para pessoa física e jurídica." },
  { icon: Wallet, title: "Atendimento Nacional", desc: "Consultoria especializada com presença em todo o território nacional." }
];

export default function Differentiators() {
  return (
    <section id="diferenciais" className="section-padding bg-white">
      <div className="grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">🌎 Por que escolher a Zanussi Corretora?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Nossa equipe se diferencia pelo suporte contínuo. Não apenas vendemos, cuidamos do seu patrimônio e saúde com assessoria técnica especializada.
          </p>
          <div className="w-20 h-1.5 bg-secondary rounded-full" />
        </div>

        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-lg border border-gray-100 rounded-xl flex items-center justify-center text-secondary">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-primary">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
