/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511987207703?text=Olá, quero uma cotação de seguro";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-secondary text-sm font-bold mb-6 border border-white/20 uppercase tracking-widest leading-none">
              <ShieldCheck size={16} />
              <span>Consultoria em Proteção Financeira</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Sua tranquilidade em primeiro lugar com a <span className="text-secondary">Zanussi Consultoria</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Consultoria especializada em seguros desde 1995, planos de saúde e proteção financeira para você, sua família ou sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 text-lg py-5 px-10">
                FAZER COTAÇÃO AGORA
                <ArrowRight size={20} />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary flex items-center justify-center gap-2 text-lg py-5 px-10">
                FALAR NO WHATSAPP
                <MessageSquare size={20} />
              </a>
            </div>

            <div className="flex items-center gap-4 text-white/80">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-400 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="Avatar" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-bold text-secondary">Mais de 15.000</span> clientes protegidos em todo o Brasil
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1621348160394-b118817760bd?q=80&w=800&auto=format&fit=crop" 
                alt="Segurança e Família" 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            {/* Trust badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
              <div className="text-primary font-bold text-3xl mb-1">29+</div>
              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider leading-tight">Anos de experiência no mercado</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
