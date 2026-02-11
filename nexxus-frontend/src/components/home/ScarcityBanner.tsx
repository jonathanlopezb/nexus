'use client';
import { useCountdown } from "@/hooks/useCountdown";

export default function ScarcityBanner() {
    const timeLeft = useCountdown(8, 45, 12);

    return (
        <div className="bg-red-600 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em] relative z-[100]">
            OFERTAS QUANTUM: 50% OFF HASTA MEDIANOCHE • {timeLeft} RESTANTES
        </div>
    );
}
