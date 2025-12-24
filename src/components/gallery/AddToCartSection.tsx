"use client";

import { Plus } from "lucide-react";
import { Artwork } from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

interface AddToCartSectionProps {
    artwork: Artwork;
}

export function AddToCartSection({ artwork }: AddToCartSectionProps) {
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const handleAddToCart = () => {
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
        showToast(`Added "${artwork.title}" to cart!`, "success");
    };

    return (
        <div className="bg-vintage-cream/50 rounded-lg p-6 mb-8 border border-vintage-sepia/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-vintage-sepia mb-1">Price</p>
                    <p className="text-4xl font-bold text-vintage-burgundy">${artwork.price}</p>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="px-8 py-4 bg-vintage-burgundy text-vintage-cream rounded-lg font-semibold hover:bg-vintage-sepia transition-colors shadow-md flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                    <Plus className="w-5 h-5" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
