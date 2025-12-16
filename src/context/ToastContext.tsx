"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { X, CheckCircle, ShoppingBag } from "lucide-react";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface Toast {
    id: string;
    message: string;
    type: "success" | "error" | "info";
    action?: {
        label: string;
        href: string;
    };
}

interface ToastContextType {
    showToast: (message: string, type?: Toast["type"], action?: Toast["action"]) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((message: string, type: Toast["type"] = "success", action?: Toast["action"]) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type, action }]);

        // Auto dismiss
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 5000);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={cn(
                            "pointer-events-auto flex items-start p-4 rounded-lg shadow-lg border transition-all duration-300 transform translate-y-0 opacity-100",
                            toast.type === "success" ? "bg-vintage-cream border-vintage-green/20 text-vintage-green" : "bg-white border-gray-200 text-gray-800"
                        )}
                        role="alert"
                    >
                        {toast.type === "success" && <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-vintage-green" />}
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-vintage-charcoal">{toast.message}</p>
                            {toast.action && (
                                <Link
                                    href={toast.action.href}
                                    onClick={() => removeToast(toast.id)}
                                    className="mt-2 text-sm font-bold text-vintage-sepia hover:text-vintage-burgundy flex items-center gap-1"
                                >
                                    {toast.action.label} &rarr;
                                </Link>
                            )}
                        </div>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
