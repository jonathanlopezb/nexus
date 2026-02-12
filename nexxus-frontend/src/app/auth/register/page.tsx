'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

        try {
            const res = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await res.json();
            if (data.jwt) {
                login(data.jwt, data.user);
                router.push('/');
            } else {
                setError(data.error?.message || 'Error en el registro neural.');
            }
        } catch (err) {
            setError('Error de conexión neural.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent">
            <div className="w-full max-w-md glass-card p-10 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 blur-[80px] -ml-16 -mt-16"></div>

                {/* Close Button */}
                <Link
                    href="/"
                    className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all group"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-90 transition-transform">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </Link>

                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter">Nueva Identidad</h1>
                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Únete al ecosistema Nexxus</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Usuario Urban</label>
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 h-14 rounded-2xl px-6 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all font-medium"
                            placeholder="runner_2077"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Enlace Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 h-14 rounded-2xl px-6 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all font-medium"
                            placeholder="neural@nexus.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Clave de Acceso</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 h-14 rounded-2xl px-6 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all font-medium"
                            placeholder="Min. 8 caracteres"
                        />
                    </div>

                    {error && <p className="text-red-500 text-[10px] font-black uppercase text-center animate-pulse">{error}</p>}

                    <button
                        disabled={loading}
                        className="w-full bg-white text-black h-16 rounded-2xl font-black uppercase italic tracking-widest text-sm hover:bg-accent transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)] active:scale-95 disabled:opacity-50"
                    >
                        {loading ? 'Creando Perfil...' : 'Generar Identidad'}
                    </button>
                </form>

                <div className="text-center pt-4">
                    <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-loose">
                        ¿Ya tienes identidad? <Link href="/auth/login" className="text-white hover:text-accent transition-colors">Acceder</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
