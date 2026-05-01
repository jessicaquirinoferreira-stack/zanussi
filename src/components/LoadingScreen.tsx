import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6"
        >
          <div className="relative">
            {/* Pulsing rings for "Protection" effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1.8], opacity: [0.5, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-primary/10 rounded-full"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.3, 1.6], opacity: [0.4, 0.1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 bg-primary/5 rounded-full"
            />
            
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center gap-4"
            >
              <img 
                src="https://i.imgur.com/JQ5HumM.png" 
                alt="Zanussi Corretora" 
                className="h-28 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-2xl font-black tracking-tighter text-primary uppercase"
              >
                Zanussi Corretora
              </motion.span>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-1 bg-primary rounded-full overflow-hidden"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2"
            >
              <Shield size={14} className="text-secondary" />
              Protegendo o que é importante para você
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
