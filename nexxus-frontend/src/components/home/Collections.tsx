'use client';
import { useState, useEffect } from "react";
import { getProducts } from "@/lib/strapi";

interface Product {
    id: number;
    documentId: string;
    Nombre: string;
    Precio: number;
    MatchNeural: number;
    Sale: boolean;
    Rare: boolean;
    ImagenAura: {
        url: string;
    } | null;
    marca: {
        Nombre: string;
        AuraColor: string | null;
    } | null;
    estilo: {
        Nombre: string;
        AuraColor: string | null;
    } | null;
}

export default function Collections() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error loading collection products:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

    // Group products by Brand
    const brandMap: Record<string, { title: string, sub: string, color: string, border: string, aura: string, products: Product[] }> = {};

    products.forEach(product => {
        const brandName = product.marca?.Nombre || 'NEXXUS';
        if (!brandMap[brandName]) {
            const isJordan = brandName.toUpperCase() === 'JORDAN';
            brandMap[brandName] = {
                title: `${brandName.toUpperCase()} // ${isJordan ? 'LEGACY' : 'NEURAL'}`,
                sub: isJordan ? "Stock de Herencia Élite" : "Diseño optimizado por Sorenexus",
                color: product.marca?.AuraColor ? `text-[${product.marca.AuraColor}]` : (isJordan ? 'text-red-500' : 'text-accent'),
                border: isJordan ? 'border-red-500/20' : 'border-accent/20',
                aura: isJordan ? 'aura-jordan' : 'aura-nike',
                products: []
            };
        }
        if (brandMap[brandName].products.length < 3) {
            brandMap[brandName].products.push(product);
        }
    });

    const collections = Object.values(brandMap);

    if (isLoading) {
        return (
            <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-32">
                {[1, 2].map((i) => (
                    <div key={i} className="space-y-10 animate-pulse">
                        <div className="h-20 w-1/3 bg-white/5 rounded-2xl"></div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((j) => (
                                <div key={j} className="h-64 bg-white/5 rounded-3xl"></div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-32">
            {collections.map((collection, idx) => (
                <div key={idx} className="space-y-10">
                    <div className={`flex items-end justify-between border-b ${collection.border} pb-6`}>
                        <div>
                            <h4 className="font-space-grotesk text-5xl font-black italic tracking-tighter uppercase">{collection.title}</h4>
                            <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${collection.color}`}>{collection.sub}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {collection.products.map((product) => {
                            const imageUrl = product.ImagenAura?.url
                                ? (product.ImagenAura.url.startsWith('http') ? product.ImagenAura.url : `${STRAPI_URL}${product.ImagenAura.url}`)
                                : "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop";

                            return (
                                <div key={product.id || product.documentId} className={`neural-card ${collection.aura} p-6 glass-card group cursor-pointer`}>
                                    <div className="h-40 flex justify-center items-center">
                                        <img src={imageUrl} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" alt={product.Nombre || "Sneaker"} />
                                    </div>
                                    <div className="mt-6 space-y-2">
                                        <div className={`text-[8px] font-black ${collection.color} tracking-widest`}>MATCH: {product.MatchNeural || 0}%</div>
                                        <h5 className="text-sm font-black uppercase italic tracking-tighter">{product.Nombre || 'Unnamed'}</h5>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-black">
                                                ${new Intl.NumberFormat('es-CO').format(product.Precio || 0)}
                                            </span>
                                            {product.Sale && <span className="text-[9px] font-black text-accent bg-accent/10 px-2 py-0.5 rounded">SALE</span>}
                                            {product.Rare && <span className="text-[9px] font-black text-red-400 bg-red-400/10 px-2 py-0.5 rounded">RARE</span>}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="neural-card p-6 glass-card group border-white/5 flex flex-col items-center justify-center text-center space-y-4 min-h-[250px] opacity-60 hover:opacity-100 transition-opacity">
                            <p className="text-[9px] font-black text-zinc-500 uppercase">Explorar más</p>
                            <span className="text-xl font-black uppercase italic">Ver Colección Completa</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {collections.length === 0 && (
                <div className="col-span-full py-20 text-center opacity-40 uppercase font-black tracking-widest text-xs">
                    Iniciando sincronización neural de colecciones...
                </div>
            )}
        </section>
    );
}
