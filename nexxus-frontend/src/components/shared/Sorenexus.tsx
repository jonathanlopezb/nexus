'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
    role: 'user' | 'ai';
    content: string;
}

export default function Sorenexus() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', content: '¡Hola! Soy Sorenexus. He optimizado tu Neural Path. ¿En qué drop puedo ayudarte hoy?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsLoading(true);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_AI_API_URL || 'http://localhost:8000';
            const response = await fetch(`${apiUrl}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg }),
            });

            if (!response.ok) throw new Error('Error en la red');

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: 'Perdón, mi conexión neural ha fallado. ¿Puedes intentar de nuevo?' }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return (
        <div
            className="fixed bottom-[100px] md:bottom-10 right-6 md:right-10 z-[200] ai-avatar scale-90 md:scale-100 flex items-center justify-center bg-white text-black rounded-full w-16 h-16 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-110 transition-all border-4 border-black group"
            onClick={() => setIsOpen(true)}
        >
            <div className="absolute inset-0 rounded-full animate-ping bg-accent/20"></div>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-[-2px] transition-transform">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        </div>
    );

    return (
        <div className="fixed bottom-[100px] md:bottom-10 right-6 md:right-10 z-[200] flex flex-col items-end gap-5">
            <div className="w-[320px] bg-zinc-900/95 backdrop-blur-3xl border border-accent rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,255,194,0.2)]">
                <div className="bg-gradient-to-r from-accent to-blue-500 p-5 flex justify-between items-center text-black font-black text-sm">
                    <div className="flex items-center gap-2 italic">
                        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FFC2" strokeWidth="3"><circle cx="12" cy="12" r="3" fill="#00FFC2" /></svg>
                        </div>
                        SORENEXUS AI
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform opacity-60 hover:opacity-100 text-black">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </button>
                </div>

                <div ref={scrollRef} className="p-6 h-[280px] overflow-y-auto space-y-4 scroll-smooth scrollbar-hide">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-4 rounded-2xl text-[11px] leading-relaxed max-w-[85%] shadow-lg ${msg.role === 'user'
                                ? 'bg-accent text-black font-bold rounded-br-none'
                                : 'bg-white/5 text-zinc-300 rounded-bl-none border border-white/5'
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none flex gap-1 items-center">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-.3s]"></div>
                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-.5s]"></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-white/5 flex gap-3 bg-black/20">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Habla con Sorenexus..."
                        className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-[11px] outline-none focus:bg-white/10 transition-all text-white placeholder:text-zinc-600"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.1)] cursor-pointer hover:scale-110 transition-transform border-4 border-black" onClick={() => setIsOpen(false)}>
                <div className="font-space-grotesk font-black text-black text-xl italic uppercase">N<span className="text-accent ml-0.5">.</span></div>
            </div>
        </div>
    );
}
