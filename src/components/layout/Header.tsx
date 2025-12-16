"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { useCart } from "@/context/CartContext";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-vintage-cream/90 backdrop-blur-md border-b border-vintage-sepia/10 shadow-sm transition-all duration-300">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="font-serif text-2xl font-bold text-vintage-sepia tracking-tight">
                            Vintage Art
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-vintage-sepia"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-vintage-charcoal hover:text-vintage-sepia transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/cart" className="group -m-2.5 p-2.5 flex items-center gap-1 text-vintage-sepia hover:text-vintage-burgundy transition-colors">
                        <ShoppingBag className="h-6 w-6" aria-hidden="true" />
                        <span className="text-sm font-medium">{mounted ? cartCount : 0}</span>
                        <span className="sr-only">items in cart</span>
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn(
                    "fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out",
                    mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {/* Background overlay */}
                <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

                <div className={cn(
                    "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-vintage-cream px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="font-serif text-2xl font-bold text-vintage-sepia">
                                Vintage Art
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-vintage-charcoal"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-vintage-charcoal hover:bg-vintage-sepia/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/cart"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-vintage-charcoal hover:bg-vintage-sepia/5 flex items-center gap-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <ShoppingBag className="h-5 w-5" />
                                    Cart (0)
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
