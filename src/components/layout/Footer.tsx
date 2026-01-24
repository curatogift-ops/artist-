'use client';

import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              DigitalPeinture
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs">
              Transform your space with exclusive digital art. High-quality, print-ready PDFs available for instant download.
            </p>

          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">Collections</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/gallery" className="hover:text-purple-600 transition-colors">All Artworks</Link></li>
              <li><Link href="/gallery?tag=Abstract" className="hover:text-purple-600 transition-colors">Abstract</Link></li>
              <li><Link href="/gallery?tag=Landscape" className="hover:text-purple-600 transition-colors">Landscape</Link></li>
              <li><Link href="/gallery?tag=Minimalist" className="hover:text-purple-600 transition-colors">Minimalist</Link></li>
              <li><Link href="/gallery?sort=newest" className="hover:text-purple-600 transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-purple-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-purple-600 transition-colors">Refund Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-purple-600 transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} ANTIQUE WORLD HOUSE. All rights reserved.</p>
          <div className="flex gap-6">

             <span>Instant Delivery</span>
             <span>Quality Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
