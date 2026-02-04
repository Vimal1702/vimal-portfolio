'use client'

import { useState } from 'react'

interface ValentinePageProps {
    onYes: () => void
    onBack: () => void
}

const noButtonTexts = [
    'No',
    'Rethink once? 🥺',
    'Are you sure? 💔',
    'Pretty please? 🙏',
    'One more chance? 🥹',
    'Think again... 💭',
    'Really? 😢',
    'Last chance! 💕',
    'Okay fine... 🫣',
]

export default function ValentinePage({ onYes, onBack }: ValentinePageProps) {
    const [noButtonScale, setNoButtonScale] = useState(1)
    const [noClickCount, setNoClickCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useState(() => {
        setTimeout(() => setIsVisible(true), 100)
    })

    const handleNoClick = () => {
        setNoButtonScale((prev) => Math.max(prev * 0.6, 0.05))
        setNoClickCount((prev) => Math.min(prev + 1, noButtonTexts.length - 1))
    }

    return (
        <div className="fixed inset-0 landing-gradient flex flex-col items-center justify-center z-40 px-6">
            {/* Back button */}
            <button
                onClick={onBack}
                className={`absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                </svg>
                <span className="text-sm font-light">Back</span>
            </button>

            <div
                className={`text-center max-w-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                <div className="mb-8">
                    <span className="text-6xl">💝</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 leading-relaxed tracking-wide font-[family-name:var(--font-display)]">
                    Hey Abi, I know we broke up...
                </h1>

                <p className="text-xl sm:text-2xl text-foreground/80 font-light mb-12">
                    But will you be my Valentine this year?
                </p>

                <div className="flex items-center justify-center gap-6 mb-8">
                    <button
                        onClick={onYes}
                        className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-xl font-medium shadow-card hover:scale-105 transition-transform duration-300"
                    >
                        Yes 💕
                    </button>

                    <button
                        onClick={handleNoClick}
                        style={{
                            transform: `scale(${noButtonScale})`,
                            opacity: Math.max(noButtonScale, 0.1),
                        }}
                        className="px-6 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium transition-all duration-300 hover:bg-muted/80 whitespace-nowrap"
                    >
                        {noButtonTexts[noClickCount]}
                    </button>
                </div>

                <p
                    className={`text-muted-foreground text-base font-light italic transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    ✨ There&apos;s a special gift waiting for you on the next page... ✨
                </p>
            </div>
        </div>
    )
}
