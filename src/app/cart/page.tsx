"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Cart() {
    const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="min-h-screen bg-vintage-offwhite py-24 px-6 text-center">Loading cart...</div>;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-vintage-offwhite py-24 px-6 text-center">
                <h1 className="text-3xl font-serif font-bold text-vintage-charcoal">Your Cart is Empty</h1>
                <p className="mt-4 text-vintage-charcoal/70">Looks like you haven't added any masterpieces yet.</p>
                <Link
                    href="/"
                    className="mt-8 inline-block rounded-md bg-vintage-sepia px-6 py-3 text-sm font-semibold text-vintage-cream shadow-sm hover:bg-vintage-burgundy transition-colors"
                >
                    Browse Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-vintage-offwhite py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-vintage-charcoal sm:text-4xl font-serif mb-12">
                    Shopping Cart
                </h1>

                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
                    {/* Cart Items */}
                    <section className="lg:col-span-7">
                        <ul role="list" className="divide-y divide-vintage-sepia/10 border-t border-b border-vintage-sepia/10">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex py-6 sm:py-10">
                                    <div className="flex-shrink-0">
                                        <div className="relative h-24 w-24 rounded-md overflow-hidden bg-vintage-cream sm:h-32 sm:w-32">
                                            <Image
                                                src={item.thumbnailImage}
                                                alt={item.title}
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-lg font-serif font-medium text-vintage-charcoal">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                                <p className="mt-1 text-sm text-vintage-charcoal/70">{item.artistName}</p>
                                                <p className="mt-1 text-sm text-vintage-charcoal/50">{item.quantity} x ${item.price.toFixed(2)}</p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <div className="absolute right-0 top-0">
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="-m-2 inline-flex p-2 text-vintage-charcoal/40 hover:text-vintage-burgundy"
                                                    >
                                                        <span className="sr-only">Remove</span>
                                                        <Trash2 className="h-5 w-5" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-4 flex text-sm text-vintage-sepia/70">
                                            High-Resolution PDF Download
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Order Summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-lg bg-vintage-cream px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 shadow-sm border border-vintage-sepia/10"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-vintage-charcoal font-serif">
                            Order Summary
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-vintage-charcoal/70">Subtotal</dt>
                                <dd className="text-sm font-medium text-vintage-charcoal">${cartTotal.toFixed(2)}</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-vintage-sepia/10 pt-4">
                                <dt className="text-base font-medium text-vintage-charcoal">Order Total</dt>
                                <dd className="text-base font-medium text-vintage-charcoal">${cartTotal.toFixed(2)}</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <Link
                                href="/checkout"
                                className="w-full rounded-md border border-transparent bg-vintage-sepia px-4 py-3 text-base font-medium text-vintage-cream shadow-sm hover:bg-vintage-burgundy focus:outline-none focus:ring-2 focus:ring-vintage-sepia focus:ring-offset-2 focus:ring-offset-gray-50 flex items-center justify-center transition-colors"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                        <div className="mt-4 text-center">
                            <button onClick={clearCart} className="text-xs text-vintage-charcoal/50 hover:text-vintage-burgundy underline">
                                Clear Cart
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
