'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
    productId: string;
}

export default function FavoriteButton({ productId }: FavoriteButtonProps) {
    const { user, token, isAuthenticated } = useAuth();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated && user?.Favoritos) {
            const favoriteIds = user.Favoritos.map((p: any) => p.documentId);
            setIsFavorite(favoriteIds.includes(productId));
        }
    }, [user, productId, isAuthenticated]);

    const toggleFavorite = async () => {
        if (!isAuthenticated || !token) {
            window.location.href = '/auth/login';
            return;
        }

        setIsLoading(true);
        const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://nexxus-backend-r8m8.onrender.com';

        try {
            // Get current user data to update favorites
            const userRes = await fetch(`${STRAPI_URL}/api/users/me?populate=Favoritos`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const userData = await userRes.json();

            const currentFavorites = userData.Favoritos || [];
            let updatedFavorites;

            if (isFavorite) {
                // Remove from favorites
                updatedFavorites = currentFavorites.filter((p: any) => p.documentId !== productId);
            } else {
                // Add to favorites
                updatedFavorites = [...currentFavorites, { documentId: productId }];
            }

            // Update user favorites
            await fetch(`${STRAPI_URL}/api/users/${userData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    Favoritos: updatedFavorites.map((p: any) => p.documentId || p),
                }),
            });

            setIsFavorite(!isFavorite);

            // Update localStorage user data
            const updatedUser = { ...user, Favoritos: updatedFavorites };
            localStorage.setItem('nexxus_user', JSON.stringify(updatedUser));
        } catch (error) {
            console.error('Error toggling favorite:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={toggleFavorite}
            disabled={isLoading}
            className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 ${isFavorite
                    ? 'bg-accent border-accent text-black shadow-[0_0_30px_rgba(0,255,194,0.3)]'
                    : 'border-white/20 hover:border-accent text-white hover:bg-accent/10'
                }`}
        >
            <Heart
                className={`w-6 h-6 transition-all ${isFavorite ? 'fill-current' : ''}`}
                strokeWidth={2.5}
            />
        </button>
    );
}
