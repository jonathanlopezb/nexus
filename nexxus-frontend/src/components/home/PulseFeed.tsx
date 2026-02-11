export default function PulseFeed() {
    const feeds = [
        "Usuario @Kev_09 acaba de comprar Vortex Quantum",
        "Sorenexus recomendó Jordan Retro a @Laura_V",
        "34 personas viendo este talle ahora",
        "Talle 10 reservado por 2 minutos",
        "Usuario @Marti_X activó Neural Price Lock"
    ];

    return (
        <div className="h-10 bg-white/5 border-y border-white/5 flex items-center overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee">
                {feeds.map((text, i) => (
                    <div key={i} className="inline-flex items-center mx-12 text-[10px] font-black uppercase tracking-widest text-white/40">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shadow-[0_0_10px_#00FFC2]"></span>
                        {text}
                    </div>
                ))}
                {/* Repeat for seamless loop */}
                {feeds.map((text, i) => (
                    <div key={`dup-${i}`} className="inline-flex items-center mx-12 text-[10px] font-black uppercase tracking-widest text-white/40">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shadow-[0_0_10px_#00FFC2]"></span>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
}
