import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

interface ArtworkDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return artworks.map((artwork) => ({
        id: artwork.id,
    }));
}

export async function generateMetadata({ params }: ArtworkDetailPageProps) {
    const { id } = await params;
    const artwork = artworks.find((art) => art.id === id);

    if (!artwork) {
        return {
            title: "Artwork Not Found",
        };
    }

    return {
        title: `${artwork.title} | Digital Art Gallery`,
        description: artwork.description,
    };
}

export default async function ArtworkDetailPage({ params }: ArtworkDetailPageProps) {
    const { id } = await params;
    const artwork = artworks.find((art) => art.id === id);

    if (!artwork) {
        notFound();
    }

    // Get current index
    const currentIndex = artworks.findIndex((art) => art.id === id);
    const previousArtwork = currentIndex > 0 ? artworks[currentIndex - 1] : null;
    const nextArtwork = currentIndex < artworks.length - 1 ? artworks[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-vintage-offwhite">
            {/* Back Button */}
            <div className="bg-white border-b border-vintage-sepia/10">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-vintage-sepia hover:text-vintage-burgundy transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Gallery</span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="sticky top-8">
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl bg-vintage-cream">
                                <Image
                                    src={`/images/gallery/${artwork.filename}`}
                                    alt={artwork.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col">
                        {/* Category Badge */}
                        <div className="mb-4">
                            <span className="inline-block bg-vintage-sepia text-vintage-cream px-4 py-2 rounded-full text-sm font-medium">
                                {artwork.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-vintage-charcoal mb-4">
                            {artwork.title}
                        </h1>

                        {/* Style */}
                        <p className="text-lg text-vintage-sepia mb-6">{artwork.style}</p>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <p className="text-vintage-charcoal/80 leading-relaxed">
                                {artwork.description}
                            </p>
                        </div>

                        {/* Metadata Grid */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-vintage-sepia/10 mb-8">
                            <h2 className="text-xl font-serif font-bold text-vintage-charcoal mb-4">
                                Artwork Details
                            </h2>

                            <div className="space-y-4">
                                {/* Mood */}
                                <div>
                                    <h3 className="text-sm font-medium text-vintage-sepia mb-2">Mood & Atmosphere</h3>
                                    <p className="text-vintage-charcoal">{artwork.mood}</p>
                                </div>

                                {/* Color Palette */}
                                <div>
                                    <h3 className="text-sm font-medium text-vintage-sepia mb-2">Color Palette</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {artwork.colors.map((color, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-vintage-cream text-vintage-charcoal rounded-full text-sm capitalize"
                                            >
                                                {color}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Style */}
                                <div>
                                    <h3 className="text-sm font-medium text-vintage-sepia mb-2">Artistic Style</h3>
                                    <p className="text-vintage-charcoal">{artwork.style}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex gap-4 mt-auto pt-8 border-t border-vintage-sepia/10">
                            {previousArtwork ? (
                                <Link
                                    href={`/gallery/${previousArtwork.id}`}
                                    className="flex-1 flex items-center gap-2 px-4 py-3 bg-vintage-sepia text-vintage-cream rounded-lg hover:bg-vintage-burgundy transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    <div className="flex-1 text-left">
                                        <p className="text-xs opacity-80">Previous</p>
                                        <p className="font-medium truncate">{previousArtwork.title}</p>
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}

                            {nextArtwork ? (
                                <Link
                                    href={`/gallery/${nextArtwork.id}`}
                                    className="flex-1 flex items-center gap-2 px-4 py-3 bg-vintage-sepia text-vintage-cream rounded-lg hover:bg-vintage-burgundy transition-colors"
                                >
                                    <div className="flex-1 text-right">
                                        <p className="text-xs opacity-80">Next</p>
                                        <p className="font-medium truncate">{nextArtwork.title}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
