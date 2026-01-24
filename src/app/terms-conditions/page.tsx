import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Terms and Conditions</h1>
      <p className="text-zinc-500 mb-8">Last Updated: January 26, 2026</p>

      <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 space-y-6">
        <p>
          Welcome to DigitalPeinture! These Terms and Conditions (&quot;Terms&quot;) govern your use of our website, digitalpeinture.com (the &quot;Site&quot;), and the purchase of our digital products. By accessing or using the Site, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. General Provisions</h2>
        <p>
          By placing an order with DigitalPeinture, you warrant that you are at least 18 years old (or have permission from a legal guardian) and accept these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Digital Products and Delivery</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Nature of Goods:</strong> All products sold on this Site are digital files (e.g., PDF downloads of painting art). No physical items will be shipped to you.</li>
          <li><strong>Instant Delivery:</strong> Upon successful payment, you will receive a download link via email or on the order confirmation page. Please ensure your email address is correct.</li>
          <li><strong>File Quality:</strong> We ensure high-resolution files suitable for printing. However, print quality depends on your printer and paper choice.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property and Usage Rights</h2>
        <p>
          All content and digital art on this Site are the intellectual property of DigitalPeinture.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personal Use Only:</strong> You may print the files for personal use (e.g., home decor, gifts).</li>
          <li><strong>No Commercial Use:</strong> You may NOT resell, redistribute, modify, or use the digital files for commercial purposes without our explicit written consent.</li>
          <li><strong>Copyright:</strong> Purchasing a file does not transfer copyright. All rights remain with DigitalPeinture.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Payments and Pricing</h2>
        <p>
          All prices are shown in the currency selected on the Site. Payments are processed securely through third-party payment gateways (e.g., Stripe, PayPal). We do not store your credit card information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Refunds and Cancellations</h2>
        <p>
          Due to the nature of digital products, <strong>all sales are final</strong>. We cannot offer refunds or exchanges once the files have been downloaded or sent.
        </p>
        <p>
          Exceptions may be made if:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You accidentally purchased the same product twice.</li>
          <li>There is a technical issue with the file that we cannot resolve.</li>
        </ul>
        <p>
          If you encounter any issues with your download, please contact us immediately.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
        <p>
          DigitalPeinture shall not be liable for any indirect, incidental, or consequential damages arising from the use of our Site or products. Our total liability shall not exceed the amount paid for the product.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the new Terms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <div className="mt-4 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <p className="font-bold">DigitalPeinture</p>
            <p>Email: <a href="mailto:hello@digitalpeinture.com" className="text-purple-600 hover:text-purple-700">hello@digitalpeinture.com</a></p>
        </div>
      </div>
    </div>
  );
}
