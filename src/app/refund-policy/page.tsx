import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Refund and Cancellation Policy</h1>
      <p className="text-zinc-500 mb-8">Last Updated: January 26, 2026</p>

      <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 space-y-6">
        <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800 rounded-xl">
          <p className="font-semibold text-red-900 dark:text-red-100">
             STRICT POLICY: Refunds are NOT possible once the file has been downloaded.
          </p>
        </div>

        <p>
          At <strong>ANTIQUE WORLD HOUSE</strong> (operating as DigitalPeinture), we specialize in downloadable digital art. Because of the irrevocable nature of digital files, we have a strict refund policy that you agree to by completing a purchase.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. No Refunds on Downloaded Items</h2>
        <p>
          Once you have clicked the &quot;Download&quot; link or the file has been sent to your email, the product is considered &quot;delivered&quot; and &quot;consumed.&quot;
        </p>
        <p>
          <strong>We cannot offer a refund, exchange, or return for any file that has been downloaded.</strong> This is industry standard for digital goods to prevent abuse (e.g., downloading the art, using it, and then asking for money back).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. When is a Refund Possible?</h2>
        <p>We only issue refunds in these very specific non-download scenarios:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Duplicate Purchase:</strong> You accidentally bought the same painting twice.</li>
          <li><strong>Undelivered File:</strong> You paid, but due to a technical error, the download link was never generated AND you did not receive the email.</li>
          <li><strong>Corrupted File:</strong> The file is technically broken, and our support team fails to provide you with a working replacement file within 48 hours.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Dispute Resolution</h2>
        <p>
           If you open a dispute or chargeback with your bank claiming &quot;Item Not Received&quot; for a product that was successfully downloaded (according to our server logs), we will submit the access logs as evidence to your bank to contest the claim.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact for Issues</h2>
        <p>
          If you have trouble with a file, please do not worry—we are here to help! Contact us, and we will ensure you get a high-quality, working file.
        </p>
        <div className="mt-4 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
             <p><strong>Support Email:</strong> <a href="mailto:hello@digitalpeinture.com" className="text-purple-600 hover:text-purple-700">hello@digitalpeinture.com</a></p>
        </div>
      </div>
    </div>
  );
}
