/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';

export default function CTASection() {
  const whatsappUrl = "https://wa.me/5511987207703?text=Olá, preciso de uma cotação urgente!";

  return (
    <section className="bg-secondary section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-[3rem] p-8 md:p-16 text-white"
        >
          <div className="inline-flex items-center gap-2 mb-8 bg-red-500/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            <AlertCircle size={14} />
            <span>Não espere acontecer</span>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            Seu patrimônio não pode ficar desprotegido hoje.
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
            Fale agora com um especialista e garanta a melhor cobertura com os melhores preços do mercado.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white text-xl font-bold py-6 px-12 rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-4 group"
            >
              <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
              FALAR COM ESPECIALISTA AGORA
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-white/80 font-medium text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              <span>Segurança Garantida</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span>Resposta em Segundos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
