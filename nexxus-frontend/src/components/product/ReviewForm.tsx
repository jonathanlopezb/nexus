'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Star } from 'lucide-react';

interface ReviewFormProps {
    productId: string;
    onReviewSubmitted?: () => void;
}

export default function ReviewForm({ productId, onReviewSubmitted }: ReviewFormProps) {
    const { user, token, isAuthenticated } = useAuth();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isAuthenticated || !token) {
            window.location.href = '/auth/login';
            return;
        }

        if (rating === 0) {
            setError('Debes seleccionar una calificación neural.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

        try {
            const res = await fetch(`${STRAPI_URL}/api/resenas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    data: {
                        Comentario: comment,
                        Calificacion: rating,
                        producto: productId,
                        usuario: user?.id,
                    }
                }),
            });

            if (res.ok) {
                setRating(0);
                setComment('');
                if (onReviewSubmitted) onReviewSubmitted();
            } else {
                setError('Error al enviar la reseña neural.');
            }
        } catch (err) {
            setError('Error de conexión neural.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="glass-card p-8 text-center">
                <p className="text-zinc-400 text-sm mb-4">Inicia sesión para dejar una reseña neural</p>
                <a href="/auth/login" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-accent transition-all">
                    Acceder Neural
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Tu Calificación Neural</p>
                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="transition-transform hover:scale-110"
                        >
                            <Star
                                className={`w-8 h-8 transition-all ${star <= (hoverRating || rating)
                                        ? 'fill-accent text-accent'
                                        : 'text-white/20'
                                    }`}
                                strokeWidth={2}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3 block">
                    Tu Opinión Neural
                </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm outline-none focus:border-accent transition-all resize-none"
                    placeholder="Comparte tu experiencia con este drop..."
                />
            </div>

            {error && <p className="text-red-500 text-xs font-black uppercase">{error}</p>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black h-14 rounded-xl font-black uppercase italic tracking-widest text-sm hover:bg-accent transition-all active:scale-95 disabled:opacity-50"
            >
                {isSubmitting ? 'Sincronizando...' : 'Publicar Reseña Neural'}
            </button>
        </form>
    );
}
