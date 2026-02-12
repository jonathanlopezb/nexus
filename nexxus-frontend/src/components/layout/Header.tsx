'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = [
        { name: 'CASUAL', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop' },
        { name: 'DEPORTIVO', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop' },
        { name: 'ELEGANTE', img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop' },
        { name: 'ALTA GAMA', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop' },
    ];

    const brands = [
        { name: 'NIKE', aura: 'bg-blue-500/20', color: 'text-white' },
        { name: 'JORDAN', aura: 'bg-red-600/20', color: 'text-red-500' },
        { name: 'ADIDAS', aura: 'bg-zinc-500/20', color: 'text-zinc-400' },
        { name: 'NEW BALANCE', aura: 'bg-indigo-500/20', color: 'text-indigo-400' },
        { name: 'YEEZY', aura: 'bg-amber-600/20', color: 'text-amber-500' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 md:py-8 pt-12 md:pt-8 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group cursor-pointer">
                        <span className="font-space-grotesk text-2xl md:text-3xl font-black tracking-tighter italic uppercase">
                            NEXUS<span className="text-accent ml-1">.</span>
                        </span>
                    </Link>

                    {/* Neural Search - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-sm lg:max-w-md mx-10 relative">
                        <input
                            type="text"
                            placeholder="BUSCAR DROPS..."
                            className="w-full bg-white/5 backdrop-blur-3xl border border-white/10 px-6 py-3 rounded-xl text-[9px] font-black tracking-widest outline-none focus:border-accent/40 transition-all placeholder:text-white/20"
                        />
                    </div>

                    {/* User & Menu Controls */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {isAuthenticated ? (
                            <Link href="/profile" className="hidden md:flex items-center gap-3 glass-card px-4 py-2 border-white/10 hover:border-accent group transition-all">
                                <div className="text-right">
                                    <p className="text-[8px] font-black uppercase text-zinc-500 tracking-widest">Urban Level</p>
                                    <p className="text-[10px] font-black text-accent uppercase italic">{user?.UrbanLevel || 'BRONZE'}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent/20 to-white/10 flex items-center justify-center border border-white/20 group-hover:border-accent transition-colors">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </div>
                            </Link>
                        ) : (
                            <Link href="/auth/login" className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" /></svg>
                                Ingresar
                            </Link>
                        )}

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
                <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/5 p-8 md:p-12 flex flex-col transition-transform duration-700 ease-out overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-12">
                        <div className="font-space-grotesk font-black text-2xl italic tracking-tighter uppercase leading-none">Explora tu<br /><span className="text-accent underline decoration-white/10">Identidad</span></div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Style Categories Cards */}
                    <div className="mb-12">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-6">ESTILOS NEXUS</p>
                        <div className="grid grid-cols-2 gap-4">
                            {styles.map((style) => (
                                <div key={style.name} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-accent transition-all">
                                    <img src={style.img} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt={style.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute inset-0 p-4 flex items-end">
                                        <span className="font-space-grotesk font-black text-xs md:text-sm tracking-widest italic">{style.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-6">UNIVERSO BRANDS</p>
                        <nav className="flex flex-col gap-4">
                            {brands.map((brand) => (
                                <a
                                    key={brand.name}
                                    href="#"
                                    className="group relative flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 transition-all overflow-hidden"
                                >
                                    <div className={`absolute inset-0 ${brand.aura} opacity-0 group-hover:opacity-100 transition-opacity blur-2xl`}></div>
                                    <span className={`relative z-10 font-space-grotesk font-black text-2xl italic tracking-tighter ${brand.color}`}>{brand.name}</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="relative z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="mt-auto pt-10 border-t border-white/5">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-6">Nexus Neural Logic v2.0</p>
                        <div className="flex gap-4">
                            <div className="flex-1 h-[2px] bg-accent/20 shadow-[0_0_10px_rgba(0,255,194,0.3)]"></div>
                            <div className="flex-1 h-[2px] bg-white/5"></div>
                            <div className="flex-1 h-[2px] bg-white/5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
