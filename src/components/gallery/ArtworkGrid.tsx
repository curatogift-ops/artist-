"use client";

import { useState } from "react";
import { Artwork } from "@/data/artworks";
import { ArtworkCard } from "./ArtworkCard";

interface ArtworkGridProps {
    artworks: Artwork[];
}

export function ArtworkGrid({ artworks }: ArtworkGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(artworks.map(art => art.category)))];

    // Filter artworks by category
    const filteredArtworks = selectedCategory === "All"
        ? artworks
        : artworks.filter(art => art.category === selectedCategory);

    return (
        <div className="w-full">
            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-vintage-sepia text-vintage-cream shadow-md"
                                : "bg-vintage-cream text-vintage-charcoal hover:bg-vintage-sepia/10 border border-vintage-sepia/20"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Artwork Count */}
            <p className="text-center text-vintage-charcoal/70 mb-6">
                Showing {filteredArtworks.length} {filteredArtworks.length === 1 ? 'artwork' : 'artworks'}
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredArtworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
            </div>
        </div>
    );
}
