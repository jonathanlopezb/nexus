export default function MobileDock() {
    return (
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[75px] bg-zinc-900/80 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-around px-4 z-[150] shadow-2xl">
            <a href="#" className="flex flex-col items-center text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span className="text-[7px] font-black uppercase mt-1 tracking-widest">Inicio</span>
            </a>
            <a href="#" className="flex flex-col items-center opacity-40 hover:opacity-100 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.54 4.05 3 5.5l7 7Z" /></svg>
                <span className="text-[7px] font-black uppercase mt-1 tracking-widest">Favoritos</span>
            </a>
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center -mt-10 shadow-[0_10px_30px_rgba(0,255,194,0.4)] cursor-pointer hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>
            </div>
            <a href="#" className="flex flex-col items-center opacity-40 hover:opacity-100 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 0 0 0 2-1.61L23 6H6" /></svg>
                <span className="text-[7px] font-black uppercase mt-1 tracking-widest">Carrito</span>
            </a>
            <a href="#" className="flex flex-col items-center opacity-40 hover:opacity-100 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <span className="text-[7px] font-black uppercase mt-1 tracking-widest">Perfil</span>
            </a>
        </nav>
    );
}
