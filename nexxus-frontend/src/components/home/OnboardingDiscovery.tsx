'use client';
import { useState, useEffect } from 'react';
import NeuralMatcher from './NeuralMatcher';

export default function OnboardingDiscovery() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('nexus_visited');
        if (!hasVisited) {
            // Show Discovery for first time users
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem('nexus_visited', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <NeuralMatcher isEntryMode={true} onClose={handleClose} />
    );
}
