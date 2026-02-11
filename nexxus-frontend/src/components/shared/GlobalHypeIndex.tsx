export default function GlobalHypeIndex() {
    return (
        <div className="fixed left-8 bottom-6 z-[100] group hidden lg:block">
            <div className="glass-card p-5 border-accent/20 flex items-center space-x-5">
                <div className="space-y-2">
                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em]">Índice Global de Hype</p>
                    <div className="w-40 h-2 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[72%] animate-pulse shadow-[0_0_15px_#00FFC2]"></div>
                    </div>
                </div>
                <div className="text-2xl font-black italic text-accent">72%</div>
            </div>
            <div className="absolute -top-12 left-0 bg-accent text-black text-[9px] font-black px-4 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-2xl">
                PICO DE ENERGÍA: +12% VS ÚLTIMA HORA
            </div>
        </div>
    );
}
