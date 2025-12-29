'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden w-full pb-20 pt-10">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200 via-purple-100 to-pink-100 dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40 opacity-70 -z-10"></div>
      
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                Art Without
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">Boundaries</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-200">
             
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up animation-delay-400">
              <Link href="/gallery" className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
                Start Collecting
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all bg-white/10 backdrop-blur-sm">
                View Collections
              </Link>
            </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fade-in-up animation-delay-600">
            <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ring-1 ring-white/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 z-10 mix-blend-overlay"></div>
                <Image 
                    src="/hero-image.png" 
                    alt="Gallery Interior with Artworks" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-cover"
                    priority
                />
            </div>
            {/* Decimal decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full blur-2xl opacity-60 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
}
