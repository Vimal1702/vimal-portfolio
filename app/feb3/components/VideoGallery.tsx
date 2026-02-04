'use client'

import { useState } from 'react'
import VideoCard from './VideoCard'
import VideoModal from './VideoModal'

interface Video {
    id: number
    title: string
    thumbnail: string
    videoUrl: string
}

// Placeholder videos with sample thumbnails
const videos: Video[] = [
    {
        id: 1,
        title: 'One more memory',
        thumbnail: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 2,
        title: 'For you',
        thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 3,
        title: 'A special moment',
        thumbnail: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&h=400&fit=crop',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 4,
        title: 'With love',
        thumbnail: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 5,
        title: 'Cherished times',
        thumbnail: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=400&fit=crop',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 6,
        title: 'Just for today',
        thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
]

interface VideoGalleryProps {
    isVisible: boolean
    onBack: () => void
}

export default function VideoGallery({ isVisible, onBack }: VideoGalleryProps) {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

    if (!isVisible) return null

    return (
        <div className="min-h-screen warm-gradient">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Back button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 mb-8 animate-fade-up"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                    </svg>
                    <span className="text-sm font-light">Back</span>
                </button>

                {/* Header */}
                <header className="text-center mb-12 sm:mb-16 animate-fade-up">
                    <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-3 tracking-wide font-[family-name:var(--font-display)]">
                        Your Memories, Abi
                    </h1>
                    <p className="text-muted-foreground text-lg font-light">
                        A collection of moments, just for you 💕
                    </p>
                </header>

                {/* Video grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {videos.map((video, index) => (
                        <VideoCard
                            key={video.id}
                            title={video.title}
                            thumbnail={video.thumbnail}
                            onClick={() => setSelectedVideo(video)}
                            index={index}
                        />
                    ))}
                </div>

                {/* Footer */}
                <footer className="mt-16 sm:mt-20 text-center animate-fade-up" style={{ animationDelay: '600ms' }}>
                    <p className="text-muted-foreground text-sm font-light tracking-wide">
                        Made with care.
                    </p>
                </footer>
            </div>

            {/* Video Modal */}
            <VideoModal
                isOpen={selectedVideo !== null}
                onClose={() => setSelectedVideo(null)}
                videoUrl={selectedVideo?.videoUrl || ''}
                title={selectedVideo?.title || ''}
            />
        </div>
    )
}
