'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X, Search, Heart, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import CurrencySelector from '../CurrencySelector';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800" suppressHydrationWarning>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          DigitalPeinture
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            
            <div className="relative group">
                <Link href="/gallery" className="flex items-center gap-1 hover:text-purple-600 transition-colors py-4">
                    Gallery <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-2 transform origin-top-left">
                    <Link href="/gallery" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-sm">All Artworks</Link>
                    <Link href="/gallery?tag=Abstract" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-sm">Abstract</Link>
                    <Link href="/gallery?tag=Landscape" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-sm">Landscape</Link>
                    <Link href="/gallery?tag=Minimalist" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-sm">Minimalist</Link>
                    <Link href="/gallery?sort=newest" className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-sm">New Arrivals</Link>
                </div>
            </div>

            <Link href="/about" className="hover:text-purple-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
            <CurrencySelector />
            <button className="hidden md:block p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-600 dark:text-zinc-300">
                <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" className="hidden md:flex p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors relative text-zinc-600 dark:text-zinc-300">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>}
            </Link>
            <Link href="/cart" className="hidden md:flex p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors relative text-zinc-600 dark:text-zinc-300">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>}
            </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-zinc-600 dark:text-zinc-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 h-[calc(100vh-64px)] overflow-y-auto">
             <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">Home</Link>
             
             <div>
                <button onClick={() => setIsGalleryOpen(!isGalleryOpen)} className="flex items-center justify-between w-full text-lg font-medium p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">
                    <span>Gallery</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isGalleryOpen ? 'rotate-180' : ''}`} />
                </button>
                {isGalleryOpen && (
                    <div className="pl-6 flex flex-col gap-2 mt-2 border-l-2 border-zinc-100 dark:border-zinc-800 ml-2">
                        <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600">All Artworks</Link>
                        <Link href="/gallery?tag=Abstract" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600">Abstract</Link>
                        <Link href="/gallery?tag=Landscape" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600">Landscape</Link>
                        <Link href="/gallery?tag=Minimalist" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600">Minimalist</Link>
                        <Link href="/gallery?sort=newest" onClick={() => setIsMenuOpen(false)} className="py-2 px-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600">New Arrivals</Link>
                    </div>
                )}
             </div>

             <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">About</Link>
             <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">Contact</Link>
             <div className="flex items-center justify-end gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                 <Link href="/wishlist" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 p-2 bg-pink-600 text-white rounded-lg">
                    <Heart className="w-5 h-5" />
                    <span>Wishlist ({wishlist.length})</span>
                 </Link>
                 <Link href="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 p-2 bg-purple-600 text-white rounded-lg">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Cart ({totalItems})</span>
                 </Link>
             </div>
        </div>
      )}
    </header>
  );
}
