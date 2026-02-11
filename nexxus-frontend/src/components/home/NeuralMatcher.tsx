'use client';
import { useState, useEffect } from 'react';

interface NeuralMatcherProps {
    isEntryMode?: boolean;
    onClose?: () => void;
}

export default function NeuralMatcher({ isEntryMode = false, onClose }: NeuralMatcherProps) {
    const [step, setStep] = useState(0); // 0: Start, 1: Style, 2: Clothing/Fit, 3: Occasion, 4: Size, 5: Scanning, 6: Result
    const [selections, setSelections] = useState({ style: '', fit: '', occasion: '', size: '' });

    const styles = ['Casual', 'Deportivo', 'Alta Gama', 'Urbano'];
    const fits = ['Oversized', 'Slim Fit', 'Techwear', 'Clásico'];
    const occasions = ['Uso Diario', 'Eventos', 'Gimnasio', 'Streetwear'];
    const sizes = ['US 8', 'US 9', 'US 10', 'US 11', 'US 12'];

    useEffect(() => {
        if (step === 5) {
            const timer = setTimeout(() => setStep(6), 3000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const reset = () => {
        setStep(1);
        setSelections({ style: '', fit: '', occasion: '', size: '' });
    };

    const containerClasses = isEntryMode
        ? "fixed inset-0 z-[1100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
        : "max-w-4xl mx-auto px-6 py-24";

    return (
        <section className={containerClasses}>
            <div className={`glass-card p-10 md:p-16 border-accent/20 relative overflow-hidden text-center w-full ${isEntryMode ? 'max-w-2xl' : ''}`}>
                {/* Background Aura */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>

                {step === 0 && (
                    <div className="relative z-10 space-y-8 animate-in fade-in duration-700">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black tracking-widest text-accent">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            NEXUS NEURAL ENGINE
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black italic font-space-grotesk leading-none tracking-tighter">
                            ¿Listo para encontrar tu <br /><span className="text-accent underline decoration-white/10 underline-offset-8">Identidad Digital</span>?
                        </h3>
                        <p className="text-zinc-500 max-w-lg mx-auto text-xs md:text-sm">
                            Deja que nuestro algoritmo neural analice tu perfil y te asigne el drop perfecto para tu talle y estilo de vida.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                            <button
                                onClick={() => setStep(1)}
                                className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-accent transition-all hover:scale-105"
                            >
                                Comenzar Escaneo
                            </button>
                            {isEntryMode && (
                                <button
                                    onClick={onClose}
                                    className="bg-white/5 border border-white/10 text-white/40 px-8 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:text-white transition-all"
                                >
                                    Explorar Catálogo
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {step === 1 && (
                    <div className="relative z-10 space-y-10 animate-in slide-in-from-right duration-500">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-accent tracking-[0.4em] uppercase tracking-tighter">Paso 01/04</p>
                            <h4 className="text-2xl md:text-3xl font-black italic uppercase font-space-grotesk tracking-tighter">Estilo Dominante</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                            {styles.map(s => (
                                <button
                                    key={s}
                                    onClick={() => { setSelections({ ...selections, style: s }); setStep(2); }}
                                    className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:bg-accent/5 transition-all text-[10px] font-black tracking-widest uppercase italic"
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
                            <p className="text-[10px] font-black text-accent tracking-[0.4em] uppercase tracking-tighter">Paso 02/04</p>
                            <h4 className="text-2xl md:text-3xl font-black italic uppercase font-space-grotesk tracking-tighter">¿Cómo es tu Outfit?</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                            {fits.map(f => (
                                <button
                                    key={f}
                                    onClick={() => { setSelections({ ...selections, fit: f }); setStep(3); }}
                                    className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:bg-accent/5 transition-all text-[10px] font-black tracking-widest uppercase italic"
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="relative z-10 space-y-10 animate-in slide-in-from-right duration-500">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-accent tracking-[0.4em] uppercase tracking-tighter">Paso 03/04</p>
                            <h4 className="text-2xl md:text-3xl font-black italic uppercase font-space-grotesk tracking-tighter">¿Para qué los Usarás?</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                            {occasions.map(o => (
                                <button
                                    key={o}
                                    onClick={() => { setSelections({ ...selections, occasion: o }); setStep(4); }}
                                    className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:bg-accent/5 transition-all text-[10px] font-black tracking-widest uppercase italic"
                                >
                                    {o}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="relative z-10 space-y-10 animate-in slide-in-from-right duration-500">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-accent tracking-[0.4em] uppercase tracking-tighter">Paso 04/04</p>
                            <h4 className="text-2xl md:text-3xl font-black italic uppercase font-space-grotesk tracking-tighter">Talla Us habitual</h4>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                            {sizes.map(s => (
                                <button
                                    key={s}
                                    onClick={() => { setSelections({ ...selections, size: s }); setStep(5); }}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/5 bg-white/5 hover:border-accent hover:bg-accent/5 transition-all flex items-center justify-center font-black italic text-xs"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 5 && (
                    <div className="relative z-10 py-10 flex flex-col items-center gap-8">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border-4 border-accent/10 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-t-accent rounded-full animate-spin shadow-[0_0_30px_rgba(0,255,194,0.4)]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-space-grotesk font-black text-accent animate-pulse tracking-tighter">MATRIX</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-black italic uppercase font-space-grotesk animate-pulse">Calculando Match Dual...</h4>
                            <p className="text-[10px] font-black text-zinc-600 tracking-[0.5em] uppercase">Sincronizando {selections.style} + {selections.fit}</p>
                        </div>
                    </div>
                )}

                {step === 6 && (
                    <div className="relative z-10 space-y-10 animate-in zoom-in duration-700">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-accent rounded-full mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(0,255,194,0.3)]">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
                            </div>
                            <h4 className="text-3xl md:text-4xl font-black italic uppercase font-space-grotesk tracking-tighter leading-none">¡Matches<br /><span className="text-accent underline decoration-white/10">Detectados!</span></h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {/* Product 1 */}
                            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col gap-6 text-left group">
                                <div className="aspect-square relative overflow-hidden bg-zinc-900/50 rounded-2xl flex items-center justify-center">
                                    <div className="absolute inset-0 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2000&auto=format&fit=crop"
                                        className="w-40 h-40 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] rotate-[-12deg] group-hover:rotate-0 transition-all duration-700"
                                        alt="Match 1"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <p className="text-[8px] font-black uppercase tracking-widest text-accent">98% COMPATIBILIDAD</p>
                                        <h5 className="text-lg font-black italic leading-none font-space-grotesk uppercase">Vortex Quantum "Zenith"</h5>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-black italic">$249.00</span>
                                        <button className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-[8px] tracking-widest hover:bg-accent transition-all">Comprar</button>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col gap-6 text-left group">
                                <div className="aspect-square relative overflow-hidden bg-zinc-900/50 rounded-2xl flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop"
                                        className="w-40 h-40 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] rotate-[12deg] group-hover:rotate-0 transition-all duration-700"
                                        alt="Match 2"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <p className="text-[8px] font-black uppercase tracking-widest text-blue-400">94% COMPATIBILIDAD</p>
                                        <h5 className="text-lg font-black italic leading-none font-space-grotesk uppercase">Gravity High 'Electric'</h5>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-black italic">$310.00</span>
                                        <button className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-[8px] tracking-widest hover:bg-blue-400 transition-all">Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 pt-6">
                            <button onClick={reset} className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all underline decoration-white/10 underline-offset-4">Reiniciar Algoritmo</button>
                            {isEntryMode && <button onClick={onClose} className="text-[10px] font-black uppercase tracking-widest text-accent hover:underline transition-all underline-offset-4">Explorar Web Completa</button>}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
