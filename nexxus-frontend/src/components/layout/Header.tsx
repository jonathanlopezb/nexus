'use client';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const brands = [
        { name: 'NIKE', aura: 'bg-blue-500/20', color: 'text-white' },
        { name: 'JORDAN', aura: 'bg-red-600/20', color: 'text-red-500' },
        { name: 'ADIDAS', aura: 'bg-zinc-500/20', color: 'text-zinc-400' },
        { name: 'NEW BALANCE', aura: 'bg-indigo-500/20', color: 'text-indigo-400' },
        { name: 'YEEZY', aura: 'bg-amber-600/20', color: 'text-amber-500' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-90 transition-transform"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Brand Sidebar Menu */}
            <div className={`fixed inset-0 z-[200] transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/5 p-12 flex flex-col transition-transform duration-700 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-20">
                        <div className="font-space-grotesk font-black text-2xl italic tracking-tighter">UNIVERSO<br /><span className="text-accent">BRANDS</span></div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {brands.map((brand) => (
                            <a
                                key={brand.name}
                                href="#"
                                className="group relative flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 transition-all overflow-hidden"
                            >
                                <div className={`absolute inset-0 ${brand.aura} opacity-0 group-hover:opacity-100 transition-opacity blur-2xl`}></div>
                                <span className={`relative z-10 font-space-grotesk font-black text-3xl italic tracking-tighter ${brand.color}`}>{brand.name}</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-10 border-t border-white/5">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-6">Nexxus Neural Logic v2.0</p>
                        <div className="flex gap-4">
                            <div className="flex-1 h-[2px] bg-accent/20"></div>
                            <div className="flex-1 h-[2px] bg-white/5"></div>
                            <div className="flex-1 h-[2px] bg-white/5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
