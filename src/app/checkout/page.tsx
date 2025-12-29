'use client';

import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useOrder } from '@/context/OrderContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle } from 'lucide-react';

import confetti from 'canvas-confetti';

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const { convertPrice } = useCurrency();
    const { createOrder } = useOrder();
    const router = useRouter();
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const subtotalUSD = cart.reduce((acc, item) => acc + (item.price_usd * item.quantity), 0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Create order and get order ID
        const orderId = createOrder(cart, customerInfo, subtotalUSD);
        
        // Trigger confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#a855f7', '#ec4899', '#fce7f3'] // Purple/Pink theme
        });

        // Show success message and clear cart
        setStep('success');
        clearCart();
        window.scrollTo(0, 0);
        
        // Redirect to download page after 2 seconds
        setTimeout(() => {
            router.push(`/download?orderId=${orderId}`);
        }, 2000);
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && cart.length === 0 && step === 'form') {
             router.push('/cart');
        }
    }, [cart, step, router, mounted]);

    if (!mounted) return null; // Avoid hydration mismatch or redirection flash

    if (cart.length === 0 && step === 'form') {
         return null; 
    }

    if (step === 'success') {
        return (
            <div className="container mx-auto px-4 py-20 text-center max-w-lg">
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    Thank you for your purchase. Your digital paintings are on their way to your email inbox.
                </p>
                <Link href="/" className="block w-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
                    Return to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <Link href="/cart" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Cart
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-3xl font-bold mb-8">Checkout</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <h2 className="font-semibold text-lg">Contact Information</h2>
                            <input 
                                type="text" 
                                required 
                                placeholder="Full Name" 
                                value={customerInfo.name}
                                onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                            />
                            <input 
                                type="email" 
                                required 
                                placeholder="Email address" 
                                value={customerInfo.email}
                                onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                            />
                            <input 
                                type="tel" 
                                required 
                                placeholder="Phone Number" 
                                value={customerInfo.phone}
                                onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                            />
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all mt-8">
                            Pay {convertPrice(subtotalUSD)}
                        </button>
                    </form>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl h-fit">
                    <h2 className="font-bold text-xl mb-6">Order Summary</h2>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
                        {cart.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden relative">
                                    <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-sm line-clamp-1">{item.title}</h4>
                                    <p className="text-xs text-zinc-500">Qty: {item.quantity}</p>
                                </div>
                                <div className="font-medium text-sm">
                                    {convertPrice(item.price_usd * item.quantity)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 flex justify-between items-center">
                        <span className="font-bold text-lg">Total</span>
                        <span className="font-xl font-bold text-purple-600">{convertPrice(subtotalUSD)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
