'use client';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black flex items-center justify-center font-black italic scale-110 group-hover:bg-accent transition-colors">N</div>
                    <span className="font-space-grotesk text-xl md:text-2xl font-black tracking-tighter italic">NEXXUS 2.0</span>
                </div>

                {/* Neural Search */}
                <div className="hidden md:flex flex-1 max-w-xl mx-10 lg:mx-20 relative">
                    <input
                        type="text"
                        placeholder="ENCONTRAR IDENTIDAD DIGITAL..."
                        className="w-full bg-white/5 backdrop-blur-3xl border border-white/10 px-8 py-4 rounded-2xl text-[10px] font-black tracking-widest outline-none focus:border-accent/40 transition-all placeholder:text-white/20"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4 text-white/30">
                        <span className="text-[8px] border border-white/10 px-2 py-0.5 rounded">⌘ K</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                </div>

                {/* Menu Controls */}
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden lg:flex items-center gap-2 text-accent">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Live: +12 Drops</span>
                    </div>
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
