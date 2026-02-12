'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductViewerProps {
    imageUrl: string | null;
    gallery?: any[];
    model3d?: any;
}

export default function ProductViewer({ imageUrl, gallery, model3d }: ProductViewerProps) {
    const [mode, setMode] = useState<'aura' | '360' | '3d'>(model3d ? '3d' : (gallery && gallery.length > 0 ? '360' : 'aura'));
    const [currentFrame, setCurrentFrame] = useState(0);

    return (
        <div className="aspect-square glass-card rounded-[40px] overflow-hidden group flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
                {mode === 'aura' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="w-full h-full flex items-center justify-center p-12"
                    >
                        {/* Aura Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl rounded-full" />
                        <img
                            src={imageUrl || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"}
                            alt="Product Aura"
                            className="w-full h-auto object-contain z-10 drop-shadow-[0_20px_50px_rgba(0,255,194,0.2)] transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </motion.div>
                )}

                {mode === '360' && gallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full flex flex-col items-center justify-center p-8 select-none"
                    >
                        <div className="w-full h-full flex items-center justify-center relative cursor-ew-resize touch-none">
                            <img
                                src={gallery[currentFrame]?.url || imageUrl}
                                alt={`Frame ${currentFrame}`}
                                className="w-full h-auto object-contain z-10 pointer-events-none"
                            />
                            {/* Drag Range Input for 360 rotation simulation */}
                            <input
                                type="range"
                                min="0"
                                max={gallery.length - 1}
                                value={currentFrame}
                                onChange={(e) => setCurrentFrame(parseInt(e.target.value))}
                                className="absolute inset-0 opacity-0 cursor-ew-resize z-20 w-full h-full"
                            />
                        </div>
                        <p className="absolute bottom-6 text-[9px] font-black uppercase tracking-widest text-zinc-500">
                            Desliza para rotación 360°
                        </p>
                    </motion.div>
                )}

                {mode === '3d' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full flex items-center justify-center bg-zinc-900/50"
                    >
                        <div className="text-center italic opacity-40">
                            <p className="text-sm font-black uppercase">Cargando Modelo 3D...</p>
                            <p className="text-[10px]">(Three.js / R3F Hub)</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mode Toggles */}
            <div className="absolute bottom-6 flex gap-2 z-30">
                <button
                    onClick={() => setMode('aura')}
                    className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'aura' ? 'bg-accent text-black' : 'bg-white/5 text-zinc-500 hover:text-white'}`}
                >
                    Aura
                </button>
                {gallery && gallery.length > 0 && (
                    <button
                        onClick={() => setMode('360')}
                        className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${mode === '360' ? 'bg-accent text-black' : 'bg-white/5 text-zinc-500 hover:text-white'}`}
                    >
                        360°
                    </button>
                )}
                {model3d && (
                    <button
                        onClick={() => setMode('3d')}
                        className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${mode === '3d' ? 'bg-accent text-black' : 'bg-white/5 text-zinc-500 hover:text-white'}`}
                    >
                        3D
                    </button>
                )}
            </div>
        </div>
    );
}
