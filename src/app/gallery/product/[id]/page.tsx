import ProductDetails from '@/components/product/ProductDetails';
import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
    params: {
        id: string;
    }
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default function ProductPage({ params }: PageProps) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }
    
    // Suggest 3 related products
    const related = products
        .filter(p => p.id !== product.id && p.tags.some(t => product.tags.includes(t)))
        .slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Gallery
            </Link>

            <ProductDetails product={product} />

            {/* Related Section */}
            {related.length > 0 && (
                <div className="mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-16">
                    <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {related.map(item => (
                            <Link href={`/gallery/product/${item.id}`} key={item.id} className="group block">
                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-3">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                                <p className="text-zinc-500">${item.price_usd}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
