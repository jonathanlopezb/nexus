'use client';
import { useState } from 'react';

export default function Sorenexus() {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) return (
        <div
            className="fixed bottom-4 right-6 md:right-10 z-[200] ai-avatar scale-90 md:scale-100 flex items-center justify-center bg-white text-black rounded-full w-16 h-16 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-110 transition-all border-4 border-black group"
            onClick={() => setIsOpen(true)}
        >
            <div className="absolute inset-0 rounded-full animate-ping bg-accent/20"></div>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-[-2px] transition-transform">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        </div>
    );

    return (
        <div className="fixed bottom-4 right-6 md:right-10 z-[200] flex flex-col items-end gap-5">
            <div className="w-[320px] bg-zinc-900/95 backdrop-blur-3xl border border-accent rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,255,194,0.2)]">
                <div className="bg-gradient-to-r from-accent to-blue-500 p-5 flex justify-between items-center text-black font-black text-sm">
                    <div className="flex items-center gap-3 italic">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FFC2" strokeWidth="3"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><circle cx="12" cy="12" r="3" fill="#00FFC2" /></svg>
                        </div>
                        SORENEXUS AI
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform opacity-60 hover:opacity-100">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className="p-6 h-[280px] overflow-y-auto space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none text-xs leading-relaxed text-zinc-300">
                        ¡Hola de nuevo! He optimizado tu **Neural Path** para encontrar las mejores ofertas.
                    </div>
                    <div className="bg-accent p-4 rounded-2xl rounded-br-none text-xs font-bold text-black self-end ml-auto max-w-[80%] text-right shadow-[0_5px_15px_rgba(0,255,194,0.3)]">
                        Muéstrame los últimos drops de Nike.
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none text-xs leading-relaxed text-zinc-300">
                        Accediendo al servidor de drops... Tienes acceso prioritario.
                    </div>
                </div>
                <div className="p-4 border-t border-white/5 flex gap-3">
                    <input type="text" placeholder="Habla con Sorenexus..." className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-xs outline-none focus:bg-white/10 transition-all text-white placeholder:text-zinc-600" />
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </div>
            </div>
            {/* Branded Center Button Style Toggle */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.1)] cursor-pointer hover:scale-110 transition-transform border-4 border-black" onClick={() => setIsOpen(false)}>
                <div className="font-space-grotesk font-black text-black text-xl italic uppercase">N<span className="text-accent ml-0.5">.</span></div>
            </div>
        </div>
    );
}
