"use client";

import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/data/artworks";

interface ArtworkCardProps {
    artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
    return (
        <Link href={`/gallery/${artwork.id}`}>
            <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-vintage-sepia/10 cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-vintage-cream/50">
                    <Image
                        src={`/images/gallery/${artwork.filename}`}
                        alt={artwork.title}
                        fill
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge */}
                    <div className="absolute top-3 right-3 bg-vintage-sepia/90 backdrop-blur-sm text-vintage-cream px-3 py-1 rounded-full text-xs font-medium">
                        {artwork.category}
                    </div>

                    {/* Title on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-serif font-bold text-lg mb-1 drop-shadow-lg">
                            {artwork.title}
                        </h3>
                        <p className="text-white/90 text-sm drop-shadow-md line-clamp-2">
                            {artwork.description}
                        </p>
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="text-lg font-serif font-bold text-vintage-charcoal mb-1 line-clamp-1">
                        {artwork.title}
                    </h3>
                    <p className="text-sm text-vintage-sepia/80 mb-2">{artwork.style}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-vintage-cream text-vintage-charcoal">
                            {artwork.mood}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
