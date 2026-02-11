'use client';
import { useState, useEffect } from 'react';

export const useCountdown = (initialHours: number, initialMinutes: number, initialSeconds: number) => {
    const [seconds, setSeconds] = useState(initialHours * 3600 + initialMinutes * 60 + initialSeconds);

    useEffect(() => {
        if (seconds <= 0) return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    const formatTime = () => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return formatTime();
};
