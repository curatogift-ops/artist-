'use client';

import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, totalItems } = useCart();
  const { convertPrice } = useCurrency();

  const subtotalUSD = cart.reduce((acc, item) => acc + (item.price_usd * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <p className="text-zinc-500 mb-8">Looks like you haven&apos;t added any masterpieces yet.</p>
        <Link href="/gallery" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors">
          Explore Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({totalItems})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
               <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <Image 
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
               </div>
               <div className="flex-1 flex flex-col justify-between">
                 <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-zinc-500">{item.dimensions}</p>
                 </div>
                 <div className="flex justify-between items-end">
                    <div className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        {convertPrice(item.price_usd)}
                    </div>
                    <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-400 hover:text-red-500 transition-colors p-2"
                        title="Remove item"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                 </div>
               </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl ring-1 ring-zinc-900/5">
                <h2 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">Order Summary</h2>
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-zinc-600 dark:text-zinc-400">
                        <span>Subtotal</span>
                        <span className="font-semibold text-zinc-900 dark:text-white">{convertPrice(subtotalUSD)}</span>
                    </div>

                    <div className="border-t border-dashed border-zinc-200 dark:border-zinc-700 pt-6 flex justify-between items-end">
                        <span className="font-bold text-lg text-zinc-900 dark:text-white">Total</span>
                        <span className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            {convertPrice(subtotalUSD)}
                        </span>
                    </div>
                </div>
                <Link href="/checkout" className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                    Proceed to Checkout
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
