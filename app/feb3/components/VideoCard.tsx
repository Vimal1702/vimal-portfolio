interface VideoCardProps {
    title: string
    thumbnail: string
    onClick: () => void
    index: number
}

export default function VideoCard({ title, thumbnail, onClick, index }: VideoCardProps) {
    return (
        <div
            className="group cursor-pointer animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={onClick}
        >
            <div className="relative overflow-hidden rounded-2xl shadow-card bg-card transition-all duration-300 ease-out group-hover:shadow-modal group-hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-background/90 shadow-soft flex items-center justify-center backdrop-blur-sm">
                            <svg
                                className="w-6 h-6 text-foreground ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="text-foreground font-medium text-base tracking-wide">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    )
}
