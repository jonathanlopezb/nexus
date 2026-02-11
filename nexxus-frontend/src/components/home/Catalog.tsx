'use client';
import ProductSkeleton from "@/components/ui/ProductSkeleton";
import { useState, useEffect } from "react";
import { getProducts } from "@/lib/strapi";

interface Product {
    id: number;
    documentId: string;
    Nombre: string;
    Descripcion: string;
    Precio: number;
    PrecioOriginal: number | null;
    ImagenAura: {
        url: string;
    } | null;
    marca: {
        Nombre: string;
    } | null;
    estilo: {
        Nombre: string;
    } | null;
}

export default function Catalog() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error loading products:", error);
            } finally {
                setIsLoading(false);
            }
        }
        loadData();
    }, []);

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                    <p className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-3">Recomendaciones Neurales</p>
                    <h3 className="font-space-grotesk text-4xl md:text-5xl font-black tracking-tighter italic">ESTILO PARA TI</h3>
                </div>
                <a href="#" className="text-xs font-bold border-b border-zinc-700 pb-2 hover:border-white transition-all uppercase tracking-widest whitespace-nowrap">Ver Catálogo</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {isLoading ? (
                    <>
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                    </>
                ) : (
                    products.map((product) => {
                        const discount = product.PrecioOriginal
                            ? Math.round(((product.PrecioOriginal - product.Precio) / product.PrecioOriginal) * 100)
                            : null;

                        // En Strapi 5, los campos están en la raíz del objeto
                        const imageUrl = product.ImagenAura?.url
                            ? (product.ImagenAura.url.startsWith('http') ? product.ImagenAura.url : `${STRAPI_URL}${product.ImagenAura.url}`)
                            : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop";

                        return (
                            <div key={product.documentId} className="glass-card p-6 md:p-8 group cursor-pointer relative">
                                <div className="h-56 md:h-64 flex justify-center items-center">
                                    <img
                                        src={imageUrl}
                                        className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500 object-contain max-h-full"
                                        alt={product.Nombre || "Sneaker"}
                                    />
                                </div>
                                <div className="mt-8 space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">
                                        <span>{product.marca?.Nombre || 'Nexxus Original'}</span>
                                        {discount && discount > 0 ? <span className="text-accent">{discount}% OFF</span> : null}
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">{product.Nombre || 'Unnamed Drop'}</h4>
                                    <div className="flex flex-col pt-2">
                                        {product.PrecioOriginal && (
                                            <span className="text-xs md:text-sm line-through opacity-40 font-bold">${product.PrecioOriginal}.00</span>
                                        )}
                                        <span className="text-3xl md:text-4xl font-black italic">${product.Precio || '0'}.00</span>
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-accent mt-4">Envío Gratis Full</p>
                                </div>
                            </div>
                        );
                    })
                )}
                {!isLoading && products.length === 0 && (
                    <div className="col-span-full py-20 text-center opacity-40 uppercase font-black tracking-widest text-xs">
                        No se encontraron productos neurales.
                    </div>
                )}
            </div>
        </section>
    );
}
