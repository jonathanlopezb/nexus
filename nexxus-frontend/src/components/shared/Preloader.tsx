'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center">
            <div className="relative">
                <div className="w-24 h-24 border-2 border-accent/20 rounded-full animate-spin border-t-accent shadow-[0_0_50px_rgba(0,255,194,0.2)]"></div>
                <div className="absolute inset-0 flex items-center justify-center font-space-grotesk font-black italic text-2xl animate-pulse">
                    N<span className="text-accent">.</span>
                </div>
            </div>
            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-white/40 animate-pulse">
                Sincronizando Identidad Neural
            </p>
        </div>
    );
}
