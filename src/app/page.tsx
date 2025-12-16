import { Hero } from "@/components/home/Hero";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="bg-vintage-offwhite">
      <Hero />
      <ProductGrid products={products} />
    </div>
  );
}
