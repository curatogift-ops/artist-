"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Product {
    id: string;
    title: string;
    artistName: string;
    description: string;
    price: number;
    thumbnailImage: string;
    fullResolutionImage?: string;
    category?: string;
    yearCreated?: string;
    dimensions?: string;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem("vintageCart");
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error("Failed to load cart from localStorage", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("vintageCart", JSON.stringify(cartItems));
        }
    }, [cartItems, isLoaded]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
