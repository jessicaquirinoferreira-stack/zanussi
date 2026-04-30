/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const whatsappUrl = "https://wa.me/5511987207703?text=Olá, quero uma cotação de seguro";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary rounded-lg text-white">
            <Shield size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary uppercase">Zanussi Consultoria</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#planos-saude" className="hover:text-primary transition-colors">Planos de Saúde</a>
          <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-sm flex flex-col items-center hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg leading-tight"
        >
          <div className="flex items-center gap-2">
            <MessageCircle size={18} />
            <span>FALAR AGORA</span>
          </div>
          <span className="text-[10px] opacity-80 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            ONLINE AGORA
          </span>
        </a>
      </div>
    </nav>
  );
}
