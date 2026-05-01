/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Facebook, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-secondary rounded-lg text-white">
              <Shield size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Zanussi Corretora</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Especialistas em proteção e seguros com mais de 30 anos de experiência. Atendimento especializado em seguros, planos de saúde e proteção financeira.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Serviços</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#servicos" className="hover:text-secondary">Seguro Auto</a></li>
            <li><a href="#servicos" className="hover:text-secondary">Residencial</a></li>
            <li><a href="#planos-saude" className="hover:text-secondary">Planos de Saúde</a></li>
            <li><a href="#servicos" className="hover:text-secondary">Consórcios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary" />
              <span>(11) 98720-7703</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-secondary" />
              <span>Guarulhos - SP</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Assessoria 24h</h4>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Nossa equipe de pós-venda está à disposição para te auxiliar em qualquer situação ou sinistro.
          </p>
          <a href="https://wa.me/5511987207703" className="text-secondary font-bold text-sm border-b-2 border-secondary pb-1 tracking-wider uppercase">
            Falar com Suporte
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold text-center md:text-left">
          © 2024 Zanussi Corretora. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-xs">
          Tradição e Segurança com mais de 30 anos de mercado.
        </p>
      </div>
    </footer>
  );
}
