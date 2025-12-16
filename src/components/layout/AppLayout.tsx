import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";

interface AppLayoutProps {
    children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <ToastProvider>
            <CartProvider>
                <div className="flex min-h-screen flex-col bg-vintage-offwhite">
                    <Header />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </CartProvider>
        </ToastProvider>
    );
}
