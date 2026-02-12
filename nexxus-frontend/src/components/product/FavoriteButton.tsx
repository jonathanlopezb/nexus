'use client';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
    productId: string;
}

export default function FavoriteButton({ productId }: FavoriteButtonProps) {
    const { isAuthenticated } = useAuth();
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        if (!isAuthenticated) {
            window.location.href = '/auth/login';
            return;
        }
        // Temporarily disabled - show tooltip
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className="w-14 h-14 rounded-full border-2 border-white/20 hover:border-accent text-white hover:bg-accent/10 flex items-center justify-center transition-all active:scale-95"
                title="Próximamente disponible"
            >
                <Heart className="w-6 h-6" strokeWidth={2.5} />
            </button>

            {showTooltip && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black border border-accent/20 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap animate-fade-in z-50">
                    Próximamente 🚀
                </div>
            )}
        </div>
    );
}
