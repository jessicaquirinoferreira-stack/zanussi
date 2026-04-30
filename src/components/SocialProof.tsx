/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  { name: "Robert Silva", role: "Empresário", text: "Fui atendido rápido e fechei na hora o seguro da minha frota. Atendimento nota 10!", rating: 5 },
  { name: "Ana Paula", role: "Professora", text: "Já renovo meu seguro residencial com a Zanussi Seguros há 5 anos. Confiança total.", rating: 5 },
  { name: "Carlos Mendes", role: "Policial Militar", text: "As condições especiais para quem é da segurança me surpreenderam. Recomendo muito.", rating: 5 }
];

export default function SocialProof() {
  return (
    <section className="bg-primary text-white section-padding overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10"><Quote size={200} /></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">O que dizem nossos clientes</h2>
        <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          <span className="ml-2 text-white/80 font-bold">4.9/5 no Google Reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl"
          >
            <div className="flex gap-1 text-yellow-500 mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-gray-200 italic mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <div className="font-bold text-lg">{t.name}</div>
              <div className="text-secondary text-xs uppercase font-bold tracking-widest">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
