/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

const names = ["Ricardo", "Fernanda", "Pedro", "Juliana", "Marcos", "Beatriz"];
const services = ["Seguro Auto", "Plano de Saúde", "Consórcio", "Seguro Vida"];

export default function ConversionBalloon() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", service: "" });

  useEffect(() => {
    const showRandom = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const service = services[Math.floor(Math.random() * services.length)];
      setData({ name, service });
      setVisible(true);
      
      setTimeout(() => setVisible(false), 5000);
    };

    const timer = setTimeout(showRandom, 4000);
    const interval = setInterval(showRandom, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-6 left-6 z-50 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 max-w-[280px]"
        >
          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div className="text-xs">
            <p className="font-bold text-primary">{data.name} acabou de solicitar uma cotação</p>
            <p className="text-gray-500">Serviço: <span className="text-secondary font-semibold">{data.service}</span></p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
