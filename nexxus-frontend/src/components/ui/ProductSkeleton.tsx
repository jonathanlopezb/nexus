'use client';

export default function ProductSkeleton() {
    return (
        <div className="glass-card p-8 group relative animate-pulse">
            <div className="h-64 bg-white/5 rounded-2xl flex justify-center items-center overflow-hidden">
                <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                    <div className="h-2 w-20 bg-white/10 rounded"></div>
                    <div className="h-2 w-12 bg-accent/20 rounded"></div>
                </div>
                <div className="h-8 w-full bg-white/10 rounded-xl"></div>
                <div className="space-y-2">
                    <div className="h-3 w-12 bg-white/5 rounded"></div>
                    <div className="h-10 w-24 bg-white/10 rounded-lg"></div>
                </div>
                <div className="h-2 w-28 bg-accent/10 rounded mt-4"></div>
            </div>
        </div>
    );
}
