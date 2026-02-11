'use client';
import { useState, useEffect } from "react";
import { getBrands } from "@/lib/strapi";

interface Brand {
    id: number;
    Nombre: string;
    AuraColor: string | null;
    Logo: {
        url: string;
    } | null;
}

export default function BrandUniverse() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getBrands();
                setBrands(data);
            } catch (error) {
                console.error("Error loading brands:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <div className="flex flex-col items-center mb-12 text-center">
                <p className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-3">Socios Oficiales</p>
                <h3 className="font-space-grotesk text-4xl font-black tracking-tighter italic uppercase">El Universo de Marcas</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {isLoading ? (
                    Array(6).fill(0).map((_, i) => (
                        <div key={i} className="h-24 glass-card animate-pulse bg-white/5"></div>
                    ))
                ) : (
                    brands.map((brand) => {
                        const logoUrl = brand.Logo?.url
                            ? (brand.Logo.url.startsWith('http') ? brand.Logo.url : `${STRAPI_URL}${brand.Logo.url}`)
                            : null;

                        return (
                            <div
                                key={brand.id}
                                className={`h-24 glass-card flex items-center justify-center p-6 group transition-all cursor-pointer`}
                                style={{
                                    borderColor: brand.AuraColor ? `${brand.AuraColor}20` : 'rgba(255,255,255,0.05)',
                                }}
                            >
                                {logoUrl ? (
                                    <img
                                        src={logoUrl}
                                        className="w-full invert opacity-40 group-hover:opacity-100 transition-opacity max-h-12 object-contain"
                                        alt={brand.Nombre}
                                    />
                                ) : (
                                    <span className="font-black text-xl uppercase opacity-40 group-hover:opacity-100 italic">{brand.Nombre}</span>
                                )}
                            </div>
                        );
                    })
                )}
                {!isLoading && brands.length === 0 && (
                    <div className="col-span-full py-10 text-center opacity-20 uppercase font-black text-[8px] tracking-widest">
                        Aura Neural no detectada.
                    </div>
                )}
            </div>
        </section>
    );
}
