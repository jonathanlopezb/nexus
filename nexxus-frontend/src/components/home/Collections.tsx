interface Shoe {
    name: string;
    price: string;
    match: string;
    img: string;
    sale?: boolean;
    rare?: boolean;
}

interface Collection {
    id: string;
    title: string;
    sub: string;
    color: string;
    aura: string;
    border: string;
    shoes: Shoe[];
}

export default function Collections() {
    const collections: Collection[] = [
        {
            id: "nike", title: "NIKE // NEURAL", sub: "Diseño optimizado por Sorenexus", color: "text-accent", aura: "aura-nike", border: "border-accent/20", shoes: [
                { name: "Air Max Portal", price: "$199.00", match: "98%", sale: true, img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop" },
                { name: "Dunk Low Aura", price: "$120.00", match: "85%", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1920&auto=format&fit=crop" }
            ]
        },
        {
            id: "jordan", title: "JORDAN // LEGACY", sub: "Stock de Herencia Élite", color: "text-red-500", aura: "aura-jordan", border: "border-red-500/20", shoes: [
                { name: "AJ1 Mid Carbon", price: "$320.00", match: "100% (PERFECTO)", rare: true, img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1920&auto=format&fit=crop" },
                { name: "AJ4 Tech Gray", price: "$280.00", match: "78%", img: "https://images.unsplash.com/photo-1512374382149-4332c6c021f1?q=80&w=1920&auto=format&fit=crop" }
            ]
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-32">
            {collections.map((collection) => (
                <div key={collection.id} className="space-y-10">
                    <div className={`flex items-end justify-between border-b ${collection.border} pb-6`}>
                        <div>
                            <h4 className="font-space-grotesk text-5xl font-black italic tracking-tighter uppercase">{collection.title}</h4>
                            <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${collection.color}`}>{collection.sub}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {collection.shoes.map((shoe, i) => (
                            <div key={i} className={`neural-card ${collection.aura} p-6 glass-card group cursor-pointer`}>
                                <div className="h-40 flex justify-center items-center">
                                    <img src={shoe.img} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" alt={shoe.name} />
                                </div>
                                <div className="mt-6 space-y-2">
                                    <div className={`text-[8px] font-black ${collection.color} tracking-widest`}>MATCH: {shoe.match}</div>
                                    <h5 className="text-sm font-black uppercase italic tracking-tighter">{shoe.name}</h5>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-black">{shoe.price}</span>
                                        {shoe.sale && <span className="text-[9px] font-black text-accent bg-accent/10 px-2 py-0.5 rounded">SALE</span>}
                                        {shoe.rare && <span className="text-[9px] font-black text-red-400 bg-red-400/10 px-2 py-0.5 rounded">RARE</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
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
        </section>
    );
}
