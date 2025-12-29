'use client';

import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { useCurrency } from '@/context/CurrencyContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const { convertPrice } = useCurrency();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  return (
    <Link href={`/gallery/product/${product.id}`} className="group flex flex-col h-full">
      <div className={`relative aspect-[3/4] overflow-hidden mb-3 transition-all duration-500 ${featured ? 'hover:shadow-2xl' : 'group-hover:shadow-xl'}`}>
         
         {/* Product Image */}
         <div className="absolute inset-[15px] z-20"> {/* Inset to fit inside frame border width */}
             <div className="relative w-full h-full">
                <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Watermark - Always visible in catalog */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 opacity-30 mix-blend-overlay">
                    <span className="text-white font-serif text-3xl font-bold -rotate-45 whitespace-nowrap drop-shadow-lg select-none">
                        DigitalPeinture
                    </span>
                </div>
             </div>
         </div>

         {/* Frame Overlay */}
         <div className="absolute inset-0 z-10 pointer-events-none">
             <Image
                 src="/frame.png"
                 alt="Frame"
                 fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                 className="object-fill" 
                 priority={featured}
             />
         </div>
         
         {/* Hover Overlay Gradient */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-40 duration-300 pointer-events-none"></div>

         {/* Wishlist Button */}
         <div className="absolute top-6 right-6 flex flex-col gap-2 z-50 p-2">
             <button 
                 onClick={(e) => {
                     e.preventDefault();
                     if (isWishlisted) {
                         removeFromWishlist(product.id);
                     } else {
                         addToWishlist(product);
                     }
                 }}
                 className={`p-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 ${isWishlisted ? 'bg-pink-50 text-pink-500' : 'bg-white/90 backdrop-blur-sm text-zinc-900 hover:bg-white'}`}
                 title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
             >
                 <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
             </button>
         </div>

         {/* Add to Cart Button */}
         <div className="absolute bottom-8 left-8 right-8 z-50 transition-all duration-300">
             <button 
                 onClick={(e) => {
                     e.preventDefault();
                     addToCart(product);
                 }}
                 className="w-full py-3 bg-white text-black font-bold rounded-full text-sm hover:bg-zinc-50 transition-colors shadow-lg flex items-center justify-center gap-2"
             >
                 <ShoppingCart className="w-4 h-4" />
                 Add to Cart
             </button>
         </div>
      </div>
      
      {/* Product Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 transition-colors truncate">{product.title}</h3>
        <div className="flex justify-between items-end mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{product.tags[0]}</span>
            <span className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-sm">
                {convertPrice(product.price_usd)}
            </span>
        </div>
      </div>
    </Link>
  );
}
