'use client';
import { useCountdown } from "@/hooks/useCountdown";
import { useState, useEffect } from "react";
import { getHero } from "@/lib/strapi";

interface HeroData {
    TitleTop: string;
    TitleAccent: string;
    Description: string;
    BadgeText: string;
    Price: number;
    OriginalPrice: number | null;
    StockUnits: number;
    MatchPercentage: number;
    MainImage: {
        url: string;
    } | null;
}

export default function Hero() {
    const timeLeft = useCountdown(0, 59, 12);
    const [heroData, setHeroData] = useState<HeroData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getHero();
                console.log("Hero Component Data:", data);
                if (data) {
                    setHeroData(data);
                }
            } catch (error) {
                console.error("Error loading hero data:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

    if (isLoading) {
        return (
            <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-10 overflow-hidden animate-pulse">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="h-10 w-48 bg-white/5 rounded-full"></div>
                        <div className="h-24 w-full bg-white/5 rounded-2xl"></div>
                        <div className="h-20 w-3/4 bg-white/5 rounded-2xl"></div>
                    </div>
                    <div className="h-80 w-full bg-white/5 rounded-[40px]"></div>
                </div>
            </section>
        );
    }

    // Default High-Power Marketing Copy if CMS is empty
    const displayData = heroData || {
        TitleTop: "NEURAL",
        TitleAccent: "OVERRIDE",
        Description: "La Singularidad ha llegado a tus pies. Rompe la barrera del asfalto con ingeniería de pulso líquido y tracción de gravedad cero. El futuro no se espera, se calza.",
        BadgeText: "DROPS EXCLUSIVOS DE TEMPORADA",
        Price: 249,
        OriginalPrice: 450,
        StockUnits: 4,
        MatchPercentage: 98,
        MainImage: null
    };

    const imageUrl = displayData.MainImage?.url
        ? (displayData.MainImage.url.startsWith('http') ? displayData.MainImage.url : `${STRAPI_URL}${displayData.MainImage.url}`)
        : "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2000&auto=format&fit=crop";

    return (
        <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Left Content */}
                <div className="space-y-6 md:space-y-10 relative z-10">
                    <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-4 md:px-5 py-2 md:py-2.5 rounded-full backdrop-blur-xl">
                        <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent"></span>
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">{displayData.BadgeText}</span>
                    </div>

                    <h2 className="text-6xl md:text-9xl font-black font-space-grotesk tracking-tighter italic leading-[0.85] uppercase">
                        {displayData.TitleTop}<br />
                        <span className="text-accent underline decoration-white/10 underline-offset-8">
                            {displayData.TitleAccent}
                        </span>
                    </h2>

                    <p className="text-zinc-500 max-w-md font-medium leading-relaxed text-sm md:text-base">
                        {displayData.Description}
                    </p>

                    <div className="flex flex-wrap gap-6 md:gap-8 items-end">
                        <div className="space-y-2">
                            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500">Neural Price Lock</p>
                            <div className="flex items-baseline gap-3 md:gap-4">
                                <span className="text-5xl md:text-6xl font-black italic">
                                    ${new Intl.NumberFormat('es-CO').format(displayData.Price)}
                                </span>
                                {displayData.OriginalPrice && (
                                    <span className="text-lg md:text-xl line-through opacity-20">
                                        ${new Intl.NumberFormat('es-CO').format(displayData.OriginalPrice)}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl backdrop-blur-xl">
                            <p className="text-[7px] md:text-[8px] font-black text-accent uppercase tracking-widest mb-2">Reserva de Stock</p>
                            <div className="text-xl md:text-2xl font-black font-mono tracking-tighter">{timeLeft}</div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a href="#catalog" className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-accent transition-all hover:scale-105 flex items-center justify-center">Comprar Ahora</a>
                        <a href="#catalog" className="bg-white/5 border border-white/10 text-white px-8 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:border-accent transition-all flex items-center justify-center">Ver Detalles</a>
                    </div>
                </div>

                {/* Right Content: Product Visualizer */}
                <div className="relative group">
                    <div className="absolute -inset-20 bg-accent/20 blur-[120px] rounded-full group-hover:bg-accent/30 transition-all"></div>
                    <div className="relative glass-card border-none bg-transparent group-hover:scale-105 transition-transform duration-700">
                        <img
                            src={imageUrl}
                            className="w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)] rotate-[-12deg] group-hover:rotate-0 transition-all duration-700 object-contain"
                            alt="Featured Drop"
                        />
                    </div>

                    {/* Floating Specs */}
                    <div className="absolute -top-10 -right-10 glass-card p-6 rotate-6 group-hover:rotate-0 transition-all">
                        <span className="text-[8px] font-black uppercase block mb-1 text-zinc-500">Match Compatible</span>
                        <span className="text-2xl font-black italic text-accent">{displayData.MatchPercentage}%</span>
                    </div>

                    <div className="absolute -bottom-10 -left-10 glass-card p-6 -rotate-6 group-hover:rotate-0 transition-all">
                        <span className="text-[8px] font-black uppercase block mb-1 text-zinc-500">Unidades Disponibles</span>
                        <span className="text-2xl font-black italic">{displayData.StockUnits.toString().padStart(2, '0')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
