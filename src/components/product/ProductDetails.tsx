'use client';

import { Product } from '@/types';
import Image from 'next/image';
import { useCurrency } from '@/context/CurrencyContext';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Heart, Share2, ZoomIn, Check } from 'lucide-react';
import { useState } from 'react';

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const { convertPrice } = useCurrency();
    const { addToCart } = useCart();
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className={`relative rounded-2xl overflow-hidden bg-gray-100 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
                 <div className={`relative aspect-[3/4] transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
                    <Image 
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                 </div>
                 {!isZoomed && (
                     <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-sm pointer-events-none">
                         <ZoomIn className="w-5 h-5 text-gray-700" />
                     </div>
                 )}
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-6 sticky top-24">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        {product.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-xs font-semibold">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">{product.title}</h1>
                    <div className="flex items-end gap-2 text-2xl">
                        <span className="font-bold text-black dark:text-white">{convertPrice(product.price_usd)}</span>
                        
                    </div>
                </div>

                <div className="prose dark:prose-invert text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <p>{product.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <div>
                        <span className="block text-xs text-zinc-500 uppercase tracking-wider mb-1">Dimensions</span>
                        <span className="font-medium">{product.dimensions}</span>
                    </div>
                    <div>
                        <span className="block text-xs text-zinc-500 uppercase tracking-wider mb-1">File Size</span>
                        <span className="font-medium">{product.file_size}</span>
                    </div>
                    <div>
                        <span className="block text-xs text-zinc-500 uppercase tracking-wider mb-1">Format</span>
                        <span className="font-medium">PDF (High-Res)</span>
                    </div>
                    <div>
                        <span className="block text-xs text-zinc-500 uppercase tracking-wider mb-1">Resolution</span>
                        <span className="font-medium">300 DPI</span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button 
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                    </button>
                    <button className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                        <Heart className="w-6 h-6 text-zinc-400 hover:text-red-500 transition-colors" />
                    </button>
                    <button className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                        <Share2 className="w-6 h-6 text-zinc-400 hover:text-blue-500 transition-colors" />
                    </button>
                </div>
                
                <div className="flex items-start gap-3 mt-4 text-sm text-zinc-500">
                     <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                     <p>Instant Download: You will receive a link to download the PDF file immediately after purchase.</p>
                </div>
            </div>
        </div>
    );
}
