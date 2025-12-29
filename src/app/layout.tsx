import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { CartProvider } from "@/context/CartContext";
import StickyCartNotification from "@/components/layout/StickyCartNotification";
import { WishlistProvider } from "@/context/WishlistContext";
import { OrderProvider } from "@/context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalPeinturePDF | Exclusive Digital Art",
  description: "Marketplace for high-quality digital painting PDFs. Buy, download, and print exclusive art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <CurrencyProvider>
          <CartProvider>
            <WishlistProvider>
              <OrderProvider>
                <div className="flex flex-col min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                  <Header />
                  <main className="flex-grow pt-16">
                    {children}
                  </main>
                  <Footer />
                  <StickyCartNotification />
                </div>
              </OrderProvider>
            </WishlistProvider>
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
