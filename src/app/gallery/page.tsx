import ProductGrid from '@/components/gallery/ProductGrid';
import { products } from '@/lib/products';

export const metadata = {
  title: 'Gallery | DigitalPeinturePDF',
  description: 'Explore our collection of high-quality digital painting PDFs.',
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Art Gallery
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
            Discover our curated collection of digital art. Use the filters below to find the perfect piece for your space.
        </p>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
}
