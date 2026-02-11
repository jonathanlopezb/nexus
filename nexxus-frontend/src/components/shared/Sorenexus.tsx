'use client';
import { useState } from 'react';

export default function Sorenexus() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return (
        <div className="fixed bottom-24 right-10 z-[200] ai-avatar scale-75 md:scale-100 flex items-center justify-center bg-accent text-black rounded-full w-14 h-14 cursor-pointer shadow-2xl" onClick={() => setIsOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>
        </div>
    );

    return (
        <div className="fixed bottom-24 right-6 md:right-10 z-[200] flex flex-col items-end gap-5">
            <div className="w-[320px] bg-zinc-900/95 backdrop-blur-3xl border border-accent rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,255,194,0.2)]">
                <div className="bg-gradient-to-r from-accent to-blue-500 p-5 flex justify-between items-center text-black font-black text-sm">
                    <div className="flex items-center gap-3 italic">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FFC2" strokeWidth="3"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>
                        </div>
                        SORENEXUS
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-950 animate-pulse"></div>
                        <button onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform opacity-60 hover:opacity-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div className="p-6 h-[280px] overflow-y-auto space-y-4">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none text-xs leading-relaxed text-zinc-300">
                        ¡Hola! Soy Sorenexus. He bloqueado el precio de los Vortex Quantum para ti mediante <b>Neural Price Lock</b>.
                    </div>
                    <div className="bg-accent p-4 rounded-2xl rounded-br-none text-xs font-bold text-black self-end ml-auto max-w-[80%] text-right">
                        ¿Por qué el precio es menor ahora?
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none text-xs leading-relaxed text-zinc-300">
                        Detecté alta compatibilidad con tu talle. Tienes 59 segundos para confirmar antes de que el stock pase a @User_99.
                    </div>
                </div>
                <div className="p-4 border-t border-white/5 flex gap-3">
                    <input type="text" placeholder="Habla con Sorenexus..." className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-xs outline-none focus:bg-white/10 transition-all text-white placeholder:text-zinc-600" />
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                </div>
            </div>
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,255,194,0.4)] cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsOpen(false)}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>
            </div>
        </div>
    );
}
