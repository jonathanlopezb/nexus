import { getProduct } from "@/lib/strapi";
import { Metadata } from "next";
import Navbar from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileDock from "@/components/layout/MobileDock";
import ProductViewer from "@/components/product/ProductViewer";
import MarketingTriggers from "@/components/product/MarketingTriggers";

interface PageProps {
    params: Promise<{
        documentId: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { documentId } = await params;
    const product = await getProduct(documentId);
    if (!product) return { title: "Producto no encontrado | NEXXUS" };

    return {
        title: `${product.Nombre} | NEXXUS Neural Drop`,
        description: product.Descripcion || `Consigue las sneakers ${product.Nombre} en el multiverso Nexxus. Edición limitada.`,
        openGraph: {
            title: product.Nombre,
            description: product.Descripcion,
            images: [product.ImagenAura?.url || ""],
        }
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { documentId } = await params;
    const product = await getProduct(documentId);

    if (!product) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <h1 className="text-white font-black text-4xl italic uppercase">Neural Error: Product Not Found</h1>
            </div>
        );
    }

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';
    const imageUrl = product.ImagenAura?.url
        ? (product.ImagenAura.url.startsWith('http') ? product.ImagenAura.url : `${STRAPI_URL}${product.ImagenAura.url}`)
        : null;

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left: Product Media / Viewer */}
                <div className="relative">
                    <ProductViewer
                        imageUrl={imageUrl}
                        gallery={product.Galeria}
                        model3d={product.Modelo3D}
                    />

                    {/* Floating Tech Specs Overlay */}
                    <div className="absolute bottom-10 left-0 space-y-4">
                        <div className="glass-card px-4 py-2 border-l-4 border-accent">
                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Neural Connect</p>
                            <p className="text-xl font-black italic">{product.MatchNeural || 85}%</p>
                        </div>
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black text-accent uppercase tracking-widest">
                                {product.Genero || 'Unisex'}
                            </span>
                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                                {product.marca?.Nombre || 'Original Drop'}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                            {product.Nombre}
                        </h1>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                            {product.Descripcion || "Este calzado ha sido procesado a través de nuestra red neural para ofrecerte el mejor ajuste y estilo del multiverso."}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl md:text-5xl font-black italic">
                                ${new Intl.NumberFormat('es-CO').format(product.Precio)}
                            </span>
                            {product.PrecioOriginal && (
                                <span className="text-xl line-through opacity-30 italic">
                                    ${new Intl.NumberFormat('es-CO').format(product.PrecioOriginal)}
                                </span>
                            )}
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 italic">Select Neural Size (US)</p>
                            <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                                {[7, 8, 8.5, 9, 10, 11].map(size => (
                                    <button key={size} className="h-12 border border-white/10 rounded-xl flex items-center justify-center font-black text-xs hover:bg-accent hover:text-black hover:border-accent transition-all">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <MarketingTriggers stock={product.Stock} matchNeural={product.MatchNeural} />
                    </div>

                    <div className="pt-8 space-y-4">
                        <button className="w-full bg-white text-black h-16 rounded-2xl font-black uppercase italic tracking-widest text-sm hover:bg-accent transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95">
                            Adquirir Drop
                        </button>
                        <p className="text-center text-[9px] font-black uppercase tracking-widest text-zinc-600">
                            Fricción cero. Pago seguro vía Addi.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
            <div className="md:hidden">
                <MobileDock />
            </div>
        </main>
    );
}
