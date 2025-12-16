import { Product } from "@/context/CartContext";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductGridProps {
    products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
    return (
        <section id="collection" className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-vintage-charcoal sm:text-4xl font-serif">
                        Featured Collection
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-vintage-charcoal/70">
                        Explore our handpicked selection of digitized vintage paintings.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
