export default function TrustSignals() {
    const signals = [
        { icon: "🛡️", title: "Compra Protegida", desc: "Recibe lo que esperabas o te devolvemos tu dinero de inmediato. Sin preguntas." },
        { icon: "🚀", title: "Envío Warp Speed", desc: "Logística asistida por IA. Entrega garantizada en menos de 24 horas en zonas urbanas." },
        { icon: "💳", title: "Financiación Neural", desc: "Paga después con Addi o Sistecredito. Sin intereses para miembros Prime." }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid grid-cols-1 md:grid-cols-3 gap-16 text-center border-t border-white/5">
            {signals.map((signal, i) => (
                <div key={i} className="space-y-6 group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{signal.icon}</div>
                    <h5 className="text-2xl font-black uppercase tracking-tighter italic">{signal.title}</h5>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">{signal.desc}</p>
                </div>
            ))}
        </section>
    );
}
