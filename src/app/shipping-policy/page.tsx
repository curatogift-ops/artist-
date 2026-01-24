import React from 'react';

export default function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Shipping and Delivery Policy</h1>
      <p className="text-zinc-500 mb-8">Last Updated: January 26, 2026</p>

      <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 space-y-6">
        <div className="p-6 bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800 rounded-xl">
          <p className="font-semibold text-purple-900 dark:text-purple-100">
             Important Notice: This website sells purely DIGITAL products. No physical item will be shipped to your address.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. How Delivery Works</h2>
        <p>
          We use an automated instant delivery system. Here is the exact process:
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Selection:</strong> You choose your desired digital painting(s) and add them to your cart.</li>
          <li><strong>Payment:</strong> You complete the secure payment process through our payment gateway.</li>
          <li><strong>Instant Redirect:</strong> Immediately after payment is confirmed, you will be automatically redirected back to our website's <strong>"Order Success"</strong> page.</li>
          <li><strong>Download:</strong> Your high-resolution PDF/Image files will be available for download instantly on that page. You can save them directly to your device.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Backup Delivery (Email)</h2>
        <p>
          In addition to the instant on-screen download, we send a backup email containing your download links to the email address you provided during checkout. This ensures you can access your files later if you accidentally close the page.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Shipping Costs & Time</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Shipping Cost:</strong> $0.00 (Free). Since there is no physical shipping, there are no delivery fees.</li>
          <li><strong>Delivery Time:</strong> Instant (0 minutes). The system works 24/7.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Download Issues</h2>
        <p>
          If you are not redirected properly or do not receive the email:
        </p>
        <ul className="list-disc pl-6 space-y-2">
            <li>Check your internet connection.</li>
            <li>Check your email Spam/Junk folder.</li>
            <li>Contact us immediately at <a href="mailto:hello@digitalpeinture.com" className="text-purple-600 font-medium">hello@digitalpeinture.com</a> with your Order ID, and we will manually send the files to you.</li>
        </ul>
      </div>
    </div>
  );
}
