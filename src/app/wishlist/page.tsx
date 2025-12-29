'use client';

import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { convertPrice } = useCurrency();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-zinc-900 dark:via-purple-900/20 dark:to-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <Heart className="w-24 h-24 mx-auto text-zinc-300 dark:text-zinc-700 mb-6" />
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              Start adding your favorite artworks to your wishlist!
            </p>
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-zinc-900 dark:via-purple-900/20 dark:to-zinc-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              My Wishlist
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="px-6 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div key={product.id} className="group flex flex-col h-full">
              <Link href={`/gallery/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden mb-3 transition-all duration-500 group-hover:shadow-xl">
                {/* Product Image */}
                <div className="absolute inset-[15px] z-20">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Watermark */}
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
                    className="object-fill"
                  />
                </div>
                
                {/* Hover Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-40 duration-300 pointer-events-none"></div>

                {/* Remove Button */}
                <div className="absolute top-6 right-6 z-50">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWishlist(product.id);
                    }}
                    className="p-2 rounded-full bg-red-500 text-white shadow-md transition-all duration-300 transform hover:scale-110 hover:bg-red-600"
                    title="Remove from Wishlist"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </Link>
              
              {/* Product Details */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 transition-colors truncate">
                  {product.title}
                </h3>
                <div className="flex justify-between items-end mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                    {product.tags[0]}
                  </span>
                  <span className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-sm">
                    {convertPrice(product.price_usd)}
                  </span>
                </div>
                
                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
