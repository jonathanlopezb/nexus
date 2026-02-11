export default function Catalog() {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-white/5">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <p className="text-accent font-black tracking-[0.4em] uppercase text-[10px] mb-3">Recomendaciones Neurales</p>
                    <h3 className="font-space-grotesk text-5xl font-black tracking-tighter italic">ESTILO PARA TI</h3>
                </div>
                <a href="#" className="text-xs font-bold border-b border-zinc-700 pb-2 hover:border-white transition-all uppercase tracking-widest">Ver Catálogo</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="glass-card p-8 group cursor-pointer relative">
                    <div className="h-64 flex justify-center items-center">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500" alt="Nike" />
                    </div>
                    <div className="mt-8 space-y-3">
                        <div className="flex justify-between items-center text-[10px] font-black tracking-[0.2em] uppercase text-zinc-500">
                            <span>Nike Alpha</span>
                            <span className="text-accent">34% OFF</span>
                        </div>
                        <h4 className="text-3xl font-black uppercase tracking-tighter italic">React Infinity</h4>
                        <div className="flex flex-col pt-2">
                            <span className="text-sm line-through opacity-40 font-bold">$250</span>
                            <span className="text-4xl font-black italic">$189.00</span>
                        </div>
                        <p className="text-[10px] font-black uppercase text-accent mt-4">Envío Gratis Full</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
