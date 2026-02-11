export default function BrandUniverse() {
    const brands = [
        { name: "NIKE", color: "hover:border-accent", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
        { name: "ADIDAS", color: "hover:border-blue-500", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
        { name: "JORDAN", color: "hover:border-red-500", logo: "https://upload.wikimedia.org/wikipedia/en/3/37/Jordan_Logo.svg" },
        { name: "PUMA", color: "hover:border-accent" },
        { name: "ASICS", color: "hover:border-blue-500" },
        { name: "BALENCIAGA", color: "hover:border-accent" }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <div className="flex flex-col items-center mb-12 text-center">
                <p className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-3">Socios Oficiales</p>
                <h3 className="font-space-grotesk text-4xl font-black tracking-tighter italic uppercase">El Universo de Marcas</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {brands.map((brand, i) => (
                    <div key={i} className={`h-24 glass-card flex items-center justify-center p-6 group transition-all cursor-pointer`}>
                        {brand.logo ? (
                            <img src={brand.logo} className="w-full invert opacity-40 group-hover:opacity-100 transition-opacity" alt={brand.name} />
                        ) : (
                            <span className="font-black text-xl uppercase opacity-40 group-hover:opacity-100 italic">{brand.name}</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
