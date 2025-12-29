'use client';

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyCartNotification() {
  const { cart, totalItems } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(cart[cart.length - 1]);

  useEffect(() => {
    if (cart.length > 0) {
      setIsVisible(true);
      // Update last added item when cart changes and length increases
      // Simple heuristic: just take the last item in the array if available
      setLastAddedItem(cart[cart.length - 1]);
    } else {
      setIsVisible(false);
    }
  }, [cart]);

  if (!isVisible || !lastAddedItem) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
      <div className="bg-white p-4 rounded-xl shadow-2xl flex items-center justify-between max-w-sm mx-auto border border-zinc-100 ring-1 ring-black/5">
        <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200">
                <Image 
                    src={lastAddedItem.thumbnail} 
                    alt={lastAddedItem.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-sm flex items-center gap-1">
                    {totalItems} Item{totalItems !== 1 && 's'} 
                    <div className="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center">
                         <span className="text-[10px] transform -rotate-90 text-zinc-500">›</span>
                    </div>
                </span>
                <span className="text-xs text-green-600 font-semibold bg-green-50 px-1.5 py-0.5 rounded-md mt-0.5 inline-block w-fit">
                    Item Added
                </span>
            </div>
        </div>
        
        <Link 
            href="/cart"
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors shadow-sm ml-4"
        >
            View Cart
        </Link>
      </div>
    </div>
  );
}
