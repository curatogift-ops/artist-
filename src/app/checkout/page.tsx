"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Checkout() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        notes: "",
    });

    useEffect(() => {
        setMounted(true);
        if (mounted && cartItems.length === 0) {
            router.push("/cart");
        }
    }, [cartItems, router, mounted]);

    // Prevent hydration mismatch or flash
    if (!mounted || cartItems.length === 0) return <div className="min-h-screen bg-vintage-offwhite py-24 flex justify-center"><div className="animate-spin h-8 w-8 border-4 border-vintage-sepia border-t-transparent rounded-full"></div></div>;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call / processing
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();
        const orderData = {
            orderId,
            customer: formData,
            items: cartItems,
            total: cartTotal,
            date: new Date().toISOString(),
        };

        // Save to sessionStorage
        sessionStorage.setItem(`vintageOrder_${orderId}`, JSON.stringify(orderData));

        // Clear cart
        clearCart();

        // Redirect
        router.push(`/download?orderId=${orderId}`);
    };

    return (
        <div className="bg-vintage-offwhite py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-vintage-charcoal sm:text-4xl font-serif mb-12">
                    Checkout
                </h1>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                    {/* Order Summary (Top on mobile, Right on desktop) */}
                    <div className="lg:col-span-2 lg:order-last">
                        <div className="rounded-lg bg-vintage-cream p-6 shadow-sm border border-vintage-sepia/10 sticky top-24">
                            <h2 className="text-lg font-medium text-vintage-charcoal font-serif mb-6">Order Summary</h2>
                            <ul role="list" className="divide-y divide-vintage-sepia/10 text-sm">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="flex py-4">
                                        <div className="h-10 w-10 flex-none rounded-md bg-gray-100 relative overflow-hidden">
                                            <Image src={item.thumbnailImage} alt={item.title} fill className="object-cover" />
                                        </div>
                                        <div className="ml-4 flex-auto">
                                            <p className="font-medium text-vintage-charcoal">{item.title}</p>
                                            <p className="text-vintage-charcoal/70">{item.quantity} x ${item.price.toFixed(2)}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center justify-between border-t border-vintage-sepia/10 pt-4 mt-6">
                                <dt className="text-base font-medium text-vintage-charcoal">Total</dt>
                                <dd className="text-base font-medium text-vintage-charcoal">${cartTotal.toFixed(2)}</dd>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-vintage-sepia/10">
                                <h2 className="text-xl font-semibold text-vintage-charcoal mb-6 font-serif">Contact Information</h2>
                                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-vintage-charcoal">
                                            Full Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-vintage-charcoal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-vintage-sepia sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-vintage-charcoal">
                                            Phone Number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="block w-full rounded-md border-0 py-1.5 text-vintage-charcoal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-vintage-sepia sm:text-sm sm:leading-6 px-3"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hidden Payment Section for now as per user request */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center rounded-md bg-vintage-gold px-3 py-3 text-base font-semibold text-vintage-sepia shadow-sm hover:bg-vintage-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vintage-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isSubmitting ? "Processing..." : `Place Order ($${cartTotal.toFixed(2)})`}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
