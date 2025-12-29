'use client';

import { useOrder } from '@/context/OrderContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle, Home, ShoppingBag } from 'lucide-react';

function DownloadPageContent() {
  const { getOrder, currentOrder } = useOrder();
  const { convertPrice } = useCurrency();
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  const [order, setOrder] = useState(currentOrder);
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (orderId) {
      const fetchedOrder = getOrder(orderId);
      if (fetchedOrder) {
        setOrder(fetchedOrder);
      } else if (!currentOrder) {
        // No order found, redirect to home
        router.push('/');
      }
    } else if (!currentOrder) {
      router.push('/');
    }
  }, [orderId, getOrder, currentOrder, router]);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            We couldn&apos;t find your order. Please check your email for the download link.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = (itemId: string, imageUrl: string, title: string) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '-')}.jpg`;
    
    // For cross-origin images, we need to fetch and create blob
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        // Mark as downloaded
        setDownloadedItems(prev => new Set(prev).add(itemId));
      })
      .catch(error => {
        console.error('Download failed:', error);
        // Fallback: try direct download
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadedItems(prev => new Set(prev).add(itemId));
      });
  };

  const handleDownloadAll = () => {
    order.items.forEach((item, index) => {
      // Stagger downloads to avoid overwhelming the browser
      setTimeout(() => {
        handleDownload(item.id, item.image, item.title);
      }, index * 500);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-zinc-900 dark:via-purple-900/20 dark:to-zinc-900 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Payment Successful!
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-2">
            Thank you for your purchase, {order.customerInfo.name}!
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            Order ID: <span className="font-mono font-semibold">{order.id}</span>
          </p>
        </div>

        {/* Download Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-100">
            📥 Download Your Digital Paintings
          </h2>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            Click the download button on each item below to save your high-resolution digital paintings. 
            You can also download all items at once using the &quot;Download All&quot; button.
          </p>
        </div>

        {/* Download All Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleDownloadAll}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download All ({order.items.length} items)
          </button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {downloadedItems.has(item.id) && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Downloaded
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-zinc-500">Qty: {item.quantity}</span>
                  <span className="font-bold text-purple-600">
                    {convertPrice(item.price_usd * item.quantity)}
                  </span>
                </div>
                <button
                  onClick={() => handleDownload(item.id, item.image, item.title)}
                  className={`w-full py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                    downloadedItems.has(item.id)
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  {downloadedItems.has(item.id) ? 'Download Again' : 'Download'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 mb-8 shadow-lg">
          <h2 className="font-bold text-xl mb-6">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-600 dark:text-zinc-400">Items</span>
              <span className="font-semibold">{order.items.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-600 dark:text-zinc-400">Total Quantity</span>
              <span className="font-semibold">
                {order.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <div className="border-t border-zinc-200 dark:border-zinc-700 pt-3 flex justify-between items-center">
              <span className="font-bold text-lg">Total Paid</span>
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                {convertPrice(order.totalAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:opacity-90 transition-all"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
          <Link
            href="/gallery"
            className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Continue Shopping
          </Link>
        </div>

        {/* Email Notice */}
        <div className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            A confirmation email with download links has been sent to{' '}
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
              {order.customerInfo.email}
            </span>
          </p>
          <p className="mt-2">
            Need help? Contact us at{' '}
            <a href="mailto:support@digitalpeinture.com" className="text-purple-600 hover:underline">
              support@digitalpeinture.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="animate-spin w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto"></div>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">Loading your order...</p>
      </div>
    }>
      <DownloadPageContent />
    </Suspense>
  );
}
