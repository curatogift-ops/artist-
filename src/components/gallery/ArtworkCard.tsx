"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { Artwork } from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

interface ArtworkCardProps {
    artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
    const { addToCart, removeFromCart, cartItems } = useCart();
    const { showToast } = useToast();

    // Check if item is already in cart
    const cartItem = cartItems.find((item) => item.id === artwork.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // Convert artwork to Product format for cart
        const product = {
            id: artwork.id,
            title: artwork.title,
            artistName: "Digital Artist",
            description: artwork.description,
            price: artwork.price,
            thumbnailImage: `/images/gallery/${artwork.filename}`,
            category: artwork.category,
        };

        addToCart(product);
        if (quantity === 0) {
            showToast(`Added "${artwork.title}" to cart!`, "success");
        }
    };

    const handleRemoveOne = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        removeFromCart(artwork.id);
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-vintage-sepia/10 h-full">
            <Link href={`/gallery/${artwork.id}`} className="relative aspect-[3/4] overflow-hidden bg-vintage-cream/50">
                <Image
                    src={`/images/gallery/${artwork.filename}`}
                    alt={artwork.title}
                    fill
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-vintage-sepia/90 backdrop-blur-sm text-vintage-cream px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
                    {artwork.category}
                </div>

                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-serif font-bold text-base sm:text-lg mb-1 drop-shadow-lg line-clamp-2">
                        {artwork.title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm drop-shadow-md line-clamp-2">
                        {artwork.description}
                    </p>
                </div>
            </Link>

            <div className="p-3 sm:p-4 flex-1 flex flex-col">
                <Link href={`/gallery/${artwork.id}`}>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-vintage-charcoal mb-1 line-clamp-1 hover:text-vintage-burgundy transition-colors">
                        {artwork.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-vintage-sepia/80 mb-3">{artwork.style}</p>
                </Link>
                
                {/* Price and Add to Cart - Always Visible */}
                <div className="mt-auto pt-3 border-t border-vintage-sepia/10">
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-bold text-vintage-burgundy">
                                ${artwork.price}
                            </span>
                            <span className="text-xs text-vintage-charcoal/50">Digital Art</span>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-vintage-cream text-vintage-charcoal">
                            {artwork.mood}
                        </span>
                    </div>

                    {/* Add to Cart Button / Quantity Controls */}
                    {quantity > 0 ? (
                        <div className="flex items-center justify-between rounded-lg border-2 border-vintage-sepia bg-vintage-offwhite p-1">
                            <button
                                onClick={handleRemoveOne}
                                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-vintage-sepia hover:bg-vintage-sepia/10 rounded-md transition-colors"
                                aria-label="Decrease quantity"
                            >
                                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <span className="text-sm sm:text-base font-bold text-vintage-charcoal min-w-[2rem] text-center">
                                {quantity} in cart
                            </span>
                            <button
                                onClick={handleAddToCart}
                                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-vintage-sepia hover:bg-vintage-sepia/10 rounded-md transition-colors"
                                aria-label="Increase quantity"
                            >
                                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleAddToCart}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-vintage-burgundy text-vintage-cream rounded-lg font-semibold hover:bg-vintage-sepia transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                        >
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
