'use client'

import { useEffect, useState } from 'react'

interface LandingScreenProps {
    onEnter: () => void
}

export default function LandingScreen({ onEnter }: LandingScreenProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Trigger animation after mount
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className="fixed inset-0 landing-gradient flex flex-col items-center justify-center cursor-pointer z-50"
            onClick={onEnter}
        >
            <div
                className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-foreground mb-4 tracking-wide font-[family-name:var(--font-display)]">
                    Happy Birthday, Abi
                    <span className="ml-3 inline-block">🎂</span>
                </h1>
                <p
                    className={`text-muted-foreground text-lg sm:text-xl font-light tracking-wide transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    Tap to open
                </p>
                <div
                    className={`mt-8 w-12 h-12 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="w-3 h-3 rounded-full bg-primary/50 animate-gentle-pulse" />
                </div>
            </div>
        </div>
    )
}
