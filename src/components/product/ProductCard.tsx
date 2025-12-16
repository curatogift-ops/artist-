"use client";

import Image from "next/image";
import { Product, useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import { useToast } from "@/context/ToastContext";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart, removeFromCart, cartItems } = useCart();
    const { showToast } = useToast();

    // Check if item is already in cart
    const cartItem = cartItems.find((item) => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = () => {
        addToCart(product);
        if (quantity === 0) {
            showToast(
                `Added "${product.title}" to cart`,
                "success",
                { label: "Checkout", href: "/checkout" }
            );
        }
    };

    const handleRemoveOne = () => {
        removeFromCart(product.id);
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-vintage-sepia/10">
            <div className="relative aspect-[3/4] overflow-hidden bg-vintage-cream/50">
                <Image
                    src={product.thumbnailImage}
                    alt={product.title}
                    fill
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay - simplified */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>

            <div className="flex flex-1 flex-col p-4">
                <p className="text-xs text-vintage-sepia/80 mb-1 font-medium">{product.category} • {product.yearCreated}</p>
                <h3 className="text-lg font-serif font-bold text-vintage-charcoal transition-colors truncate">
                    {product.title}
                </h3>
                <p className="text-sm text-vintage-charcoal/70 mb-2">{product.artistName}</p>

                <div className="mt-auto pt-4 flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <p className="text-lg font-bold text-vintage-sepia">${product.price.toFixed(2)}</p>
                        <span className="text-xs text-vintage-charcoal/50">Digital Download</span>
                    </div>

                    {quantity > 0 ? (
                        <div className="flex items-center rounded-md border border-vintage-sepia bg-vintage-offwhite">
                            <button
                                onClick={handleRemoveOne}
                                className="px-3 py-1 text-vintage-sepia hover:bg-vintage-sepia/10 transition-colors"
                                aria-label="Decrease quantity"
                            >
                                -
                            </button>
                            <span className="px-2 text-sm font-semibold text-vintage-charcoal min-w-[1.5rem] text-center">{quantity}</span>
                            <button
                                onClick={handleAddToCart}
                                className="px-3 py-1 text-vintage-sepia hover:bg-vintage-sepia/10 transition-colors"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleAddToCart}
                            className="rounded-full bg-vintage-sepia p-2 text-vintage-cream shadow-sm hover:bg-vintage-burgundy transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vintage-sepia"
                            title="Add to Cart"
                        >
                            <Plus className="h-5 w-5" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
