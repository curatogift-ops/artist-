import { artworks } from "@/data/artworks";
import { ArtworkGrid } from "@/components/gallery/ArtworkGrid";

export const metadata = {
    title: "Digital Art Gallery | Vintage Art Marketplace",
    description: "Explore our collection of 62 unique digital artworks featuring portraits, fantasy art, and stunning digital paintings.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-vintage-offwhite">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-vintage-burgundy via-vintage-sepia to-vintage-charcoal text-vintage-cream py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                        Digital Art Gallery
                    </h1>
                    <p className="text-lg md:text-xl text-vintage-cream/90 max-w-2xl mx-auto">
                        Discover a curated collection of 62 stunning digital artworks, each with its own unique story and beauty
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <ArtworkGrid artworks={artworks} />
            </div>
        </div>
    );
}
