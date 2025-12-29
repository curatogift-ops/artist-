'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';
import Hero from '@/components/home/Hero';
import ProductCard from '@/components/gallery/ProductCard';

export default function Home() {
  // Get top 4 featured products (random or fixed)
  const featured = products.slice(0, 4);

  return (
    <div className="flex flex-col pb-20">
      <Hero />
      
      <section className="container mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Masterpieces</h2>
                <p className="text-zinc-500 text-lg"></p>
            </div>
            <Link href="/gallery" className="group flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                View Full Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product, index) => (
                <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <ProductCard product={product} featured />
                </div>
            ))}
        </div>

        <div className="flex justify-center mt-12">
            <Link 
                href="/gallery" 
                className="group flex items-center gap-2 bg-transparent border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 px-8 py-3 rounded-full font-bold hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition-all"
            >
                View All Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-32">
          <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-800 opacity-50"></div>
             <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
                 <p className="text-zinc-300 text-lg mb-8">Access our complete library of over 100 high-resolution digital paintings instantly.</p>
                 <Link href="/gallery" className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-zinc-100 transition-colors">
                    Browse Gallery
                 </Link>
             </div>
          </div>
      </section>
    </div>
  );
}
