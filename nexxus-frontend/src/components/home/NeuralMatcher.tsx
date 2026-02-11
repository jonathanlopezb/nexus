'use client';
import { useState, useEffect } from 'react';

export default function NeuralMatcher() {
    const [step, setStep] = useState(0); // 0: Start, 1: Style, 2: Size, 3: Scanning, 4: Result
    const [selections, setSelections] = useState({ style: '', size: '' });

    const styles = ['Casual', 'Deportivo', 'Elegante', 'Alta Gama'];
    const sizes = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'];

    useEffect(() => {
        if (step === 3) {
            const timer = setTimeout(() => setStep(4), 3000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const reset = () => {
        setStep(0);
        setSelections({ style: '', size: '' });
    };

    return (
        <section className="max-w-4xl mx-auto px-6 py-24">
            <div className="glass-card p-10 md:p-16 border-accent/30 relative overflow-hidden text-center">
                {/* Background Aura */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>

                {step === 0 && (
                    <div className="relative z-10 space-y-8 animate-in fade-in duration-700">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black tracking-widest text-accent">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            NEXUS NEURAL ENGINE
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black italic font-space-grotesk leading-none tracking-tighter">
                            ¿Listo para encontrar tu <br /><span className="text-accent underline decoration-white/10 underline-offset-8">Identidad Digital</span>?
                        </h3>
                        <p className="text-zinc-500 max-w-lg mx-auto text-sm md:text-base">
                            Deja que nuestro algoritmo neural analice tu perfil y te asigne el drop perfecto para tu talle y estilo de vida.
                        </p>
                        <button
                            onClick={() => setStep(1)}
                            className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                        >
                            Comenzar Escaneo
                        </button>
                    </div>
                )}

                {step === 1 && (
                    <div className="relative z-10 space-y-10 animate-in slide-in-from-right duration-500">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-accent tracking-[0.4em] uppercase">Paso 01/02</p>
                            <h4 className="text-3xl font-black italic uppercase font-space-grotesk tracking-tighter">Selecciona tu Estilo Dominante</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                            {styles.map(s => (
                                <button
                                    key={s}
                                    onClick={() => {
                                        setSelections({ ...selections, style: s });
                                        setStep(2);
                                    }}
                                    className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:bg-accent/5 transition-all text-xs font-black tracking-widest uppercase italic"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="relative z-10 space-y-10 animate-in slide-in-from-right duration-500">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-accent tracking-[0.4em] uppercase">Paso 02/02</p>
                            <h4 className="text-3xl font-black italic uppercase font-space-grotesk tracking-tighter">Tu Talla de Identidad (US)</h4>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                            {sizes.map(s => (
                                <button
                                    key={s}
                                    onClick={() => {
                                        setSelections({ ...selections, size: s });
                                        setStep(3);
                                    }}
                                    className="w-20 h-20 rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:bg-accent/5 transition-all flex items-center justify-center font-black italic"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="relative z-10 py-10 flex flex-col items-center gap-8">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border-4 border-accent/20 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-t-accent rounded-full animate-spin shadow-[0_0_30px_rgba(0,255,194,0.4)]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-space-grotesk font-black text-accent animate-pulse">FIX</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-black italic uppercase font-space-grotesk animate-pulse">Sincronizando Identidad...</h4>
                            <p className="text-[10px] font-black text-zinc-600 tracking-[0.5em] uppercase">Analizando stock vs compatibilidad neural</p>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="relative z-10 space-y-10 animate-in zoom-in duration-700">
                        <div className="space-y-4">
                            <div className="w-20 h-20 bg-accent rounded-full mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(0,255,194,0.5)]">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
                            </div>
                            <h4 className="text-4xl font-black italic uppercase font-space-grotesk tracking-tighter leading-none">¡Match Neural<br /><span className="text-accent">Confirmado!</span></h4>
                        </div>

                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center gap-10 text-left max-w-2xl mx-auto group">
                            <div className="w-48 h-48 relative shrink-0">
                                <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2000&auto=format&fit=crop"
                                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] rotate-[-12deg] group-hover:rotate-0 transition-all duration-700"
                                    alt="Match Result"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-[8px] font-black uppercase tracking-widest text-accent">NEXUS PICK PARA TI:</p>
                                    <h5 className="text-2xl font-black italic leading-none font-space-grotesk uppercase">Vortex Quantum "Zenith"</h5>
                                    <p className="text-sm text-zinc-500 font-bold uppercase tracking-tight">Estilo: {selections.style} | Talla: {selections.size}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-black italic">$249.00</span>
                                    <span className="text-[10px] bg-accent text-black px-2 py-1 rounded font-black tracking-widest uppercase italic">-45% OFF</span>
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button className="flex-1 bg-white text-black px-6 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-accent transition-all">Comprar Ahora</button>
                                    <button
                                        onClick={reset}
                                        className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/5 transition-all"
                                        title="Volver a empezar"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
