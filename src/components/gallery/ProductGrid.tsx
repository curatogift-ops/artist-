'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Extract unique tags for filter
  const tags = useMemo(() => {
    const allTags = products.flatMap(p => p.tags);
    return ['All', ...Array.from(new Set(allTags))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filter !== 'All') {
      result = result.filter(p => p.tags.includes(filter));
    }

    if (sortBy === 'price-low') {
        result.sort((a, b) => a.price_usd - b.price_usd);
    } else if (sortBy === 'price-high') {
        result.sort((a, b) => b.price_usd - a.price_usd);
    } 
    // Default 'newest' uses original order (assuming new items are pushed later or we could use ID)

    return result;
  }, [products, filter, sortBy]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Filter Scrollable Area */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filter === tag 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">Sort by:</span>
            <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
              No artworks found matching your criteria.
          </div>
      )}
    </div>
  );
}
