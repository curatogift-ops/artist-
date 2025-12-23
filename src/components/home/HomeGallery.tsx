"use client";

import { useState } from "react";
import Link from "next/link";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { artworks } from "@/data/artworks";

export function HomeGallery() {
    const [showAll, setShowAll] = useState(false);
    const displayedArtworks = showAll ? artworks : artworks.slice(0, 30);

    return (
        <section className="py-16 px-4 bg-vintage-offwhite">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-vintage-charcoal mb-4">
                        Digital Art Gallery
                    </h2>
                    <p className="text-lg text-vintage-charcoal/70 max-w-2xl mx-auto">
                        Explore our collection of {artworks.length} stunning digital artworks
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {displayedArtworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </div>

                {/* Show More / View All Buttons */}
                <div className="flex justify-center gap-4">
                    {!showAll && artworks.length > 30 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-8 py-3 bg-vintage-sepia text-vintage-cream rounded-lg font-semibold hover:bg-vintage-burgundy transition-colors shadow-md"
                        >
                            Show More ({artworks.length - 30} more artworks)
                        </button>
                    )}

                    <Link
                        href="/gallery"
                        className="px-8 py-3 bg-vintage-charcoal text-vintage-cream rounded-lg font-semibold hover:bg-vintage-sepia transition-colors shadow-md"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}
