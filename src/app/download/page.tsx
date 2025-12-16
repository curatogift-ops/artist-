"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Download, CheckCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";

interface OrderData {
    orderId: string;
    customer: { name: string; email: string };
    items: any[];
    total: number;
}

function DownloadContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get("orderId");
    const [order, setOrder] = useState<OrderData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!orderId) {
            router.push("/");
            return;
        }

        const savedOrder = sessionStorage.getItem(`vintageOrder_${orderId}`);
        if (savedOrder) {
            setOrder(JSON.parse(savedOrder));
        } else {
            // If order not found in session, maybe redirect or show error.
            // For safety in this demo, let's just let it stay null and show not found.
        }
        setLoading(false);
    }, [orderId, router]);

    if (loading) return <div className="min-h-screen bg-vintage-offwhite py-24 flex justify-center"><div className="animate-spin h-8 w-8 border-4 border-vintage-sepia border-t-transparent rounded-full"></div></div>;

    if (!order) {
        return (
            <div className="min-h-screen bg-vintage-offwhite py-24 px-6 text-center">
                <h1 className="text-2xl font-bold text-vintage-charcoal">Order Not Found</h1>
                <p className="mt-4 text-vintage-charcoal/70">We couldn't find the order details. Please contact support.</p>
                <Link href="/" className="mt-8 inline-block text-vintage-sepia hover:underline">Return Home</Link>
            </div>
        );
    }

    const handleDownload = (itemName: string) => {
        // Mock download logic - normally this would trigger a real file download
        // Since we don't have real PDFs in public folder yet, we can simulate.
        // We'll alert user for MVP.
        alert(`Downloading started for: ${itemName}.pdf`);

        // Real implementation:
        // const link = document.createElement('a');
        // link.href = `/downloads/${itemName}.pdf`; 
        // link.download = `${itemName}.pdf`;
        // link.click();
    };

    return (
        <div className="bg-vintage-offwhite py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="rounded-lg bg-white p-8 shadow-sm border border-vintage-sepia/10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-vintage-charcoal font-serif">Thank you for your purchase!</h1>
                    <p className="mt-2 text-lg text-vintage-charcoal/70">
                        Hi {order.customer.name}, your order #{order.orderId} has been confirmed.
                    </p>
                    <p className="text-sm text-vintage-charcoal/60 mt-2">
                        A confirmation email has been sent to {order.customer.email}.
                    </p>

                    <div className="mt-12 text-left">
                        <h2 className="text-xl font-semibold text-vintage-charcoal mb-6 border-b border-vintage-sepia/10 pb-2 font-serif">Your Downloads</h2>
                        <ul className="space-y-6">
                            {order.items.map((item: any) => (
                                <li key={item.id} className="flex items-center justify-between bg-vintage-offwhite p-4 rounded-md border border-vintage-sepia/5">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0 bg-gray-200">
                                            <Image src={item.thumbnailImage} alt={item.title} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-vintage-charcoal">{item.title}</p>
                                            <p className="text-sm text-vintage-charcoal/60">PDF • 300 DPI • ~15MB</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDownload(item.title)}
                                        className="inline-flex items-center gap-2 rounded-md bg-vintage-sepia px-3.5 py-2 text-sm font-semibold text-vintage-cream shadow-sm hover:bg-vintage-burgundy transition-colors"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12 pt-8 border-t border-vintage-sepia/10 flex justify-center">
                        <Link href="/" className="flex items-center gap-2 text-vintage-sepia font-medium hover:text-vintage-burgundy transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DownloadPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-vintage-offwhite py-24 flex justify-center"><div className="animate-spin h-8 w-8 border-4 border-vintage-sepia border-t-transparent rounded-full"></div></div>}>
            <DownloadContent />
        </Suspense>
    );
}
