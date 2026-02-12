'use client';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
    id: number;
    Comentario: string;
    Calificacion: number;
    createdAt: string;
    usuario: {
        username: string;
        UrbanLevel?: string;
    };
}

interface ReviewListProps {
    productId: string;
    refreshTrigger?: number;
}

export default function ReviewList({ productId, refreshTrigger }: ReviewListProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

            try {
                const res = await fetch(
                    `${STRAPI_URL}/api/resenas?filters[producto][documentId][$eq]=${productId}&populate=usuario&sort=createdAt:desc`
                );
                const data = await res.json();
                setReviews(data.data || []);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, [productId, refreshTrigger]);

    if (isLoading) {
        return (
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="glass-card p-6 animate-pulse">
                        <div className="h-4 bg-white/5 rounded w-1/3 mb-4"></div>
                        <div className="h-3 bg-white/5 rounded w-full mb-2"></div>
                        <div className="h-3 bg-white/5 rounded w-2/3"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (reviews.length === 0) {
        return (
            <div className="glass-card p-12 text-center">
                <p className="text-zinc-500 text-sm italic">Aún no hay reseñas neurales para este drop. ¡Sé el primero!</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {reviews.map((review) => (
                <div key={review.id} className="glass-card p-6 space-y-4 hover:border-white/20 transition-all">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent/20 to-white/10 flex items-center justify-center border border-white/20">
                                <span className="text-xs font-black uppercase">
                                    {review.usuario?.username?.charAt(0) || 'U'}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-black">{review.usuario?.username || 'Usuario Neural'}</p>
                                <p className="text-[9px] font-black uppercase tracking-widest text-accent">
                                    {review.usuario?.UrbanLevel || 'BRONZE'}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.Calificacion
                                            ? 'fill-accent text-accent'
                                            : 'text-white/10'
                                        }`}
                                    strokeWidth={2}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed">{review.Comentario}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
                        {new Date(review.createdAt).toLocaleDateString('es-CO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </div>
            ))}
        </div>
    );
}
