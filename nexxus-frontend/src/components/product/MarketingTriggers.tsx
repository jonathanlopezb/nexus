'use client';
import { motion } from 'framer-motion';

interface MarketingTriggersProps {
    stock?: number;
    matchNeural?: number;
}

export default function MarketingTriggers({ stock = 5, matchNeural = 85 }: MarketingTriggersProps) {
    return (
        <div className="space-y-4">
            {/* Scarcity Trigger */}
            {stock < 10 && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 p-4 rounded-2xl"
                >
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-red-400">
                        ALERTA: Solo quedan {stock} unidades en este cuadrante
                    </p>
                </motion.div>
            )}

            {/* Social Proof / Status Trigger */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 bg-accent/10 border border-accent/20 p-4 rounded-2xl"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00FFC2" strokeWidth="3">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">
                    Match Neural del {matchNeural}% con tu perfil
                </p>
            </motion.div>

            {/* Loss Aversion */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900 border border-white/5 p-4 rounded-2xl"
            >
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Nexxus Protection</p>
                <p className="text-[11px] text-zinc-300">
                    Envío asegurado y devoluciones gratis en 30 días. Tu inversión está protegida.
                </p>
            </motion.div>
        </div>
    );
}
