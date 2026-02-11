export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-white/5 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                <div className="lg:col-span-2 space-y-10">
                    <h5 className="text-6xl font-black tracking-tighter italic uppercase leading-none">Únete a la lista<span className="text-accent">.</span></h5>
                    <p className="text-zinc-500 max-w-sm font-medium">Únete a la élite de Nexus para accesos anticipados y drops secretos.</p>
                    <div className="relative max-w-md">
                        <input type="email" placeholder="TU DIRECCIÓN DIGITAL" className="w-full bg-white/5 border border-white/10 rounded-xl px-8 py-6 text-sm font-bold tracking-widest outline-none focus:border-accent transition-all" />
                        <button className="absolute right-6 top-1/2 -translate-y-1/2 text-accent font-black text-sm tracking-widest">UNIRSE</button>
                    </div>
                </div>
                <div>
                    <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Navegación</h6>
                    <ul className="space-y-4 text-sm font-bold opacity-60">
                        <li><a href="#" className="hover:opacity-100 transition-opacity">Archivo Privado</a></li>
                        <li><a href="#" className="hover:opacity-100 transition-opacity">Ajustes Neurales</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Pagos</h6>
                    <div className="space-y-6 uppercase tracking-widest text-[10px] font-black">
                        <img src="https://addi.com/favicon-32x32.png" className="h-6 filter invert opacity-30" alt="Addi" />
                        <p className="text-zinc-500">Hasta 12 meses sin interés.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
