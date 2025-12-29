import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">About Us</h1>
      
      <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 space-y-6">
        <p className="text-xl font-medium text-purple-600">
          Welcome to <strong>DigitalPeinture</strong> – your destination for beautiful, high-quality digital painting art!
        </p>
        
        <p>
          At DigitalPeinture, we specialize in creating and curating stunning printable art inspired by classic and contemporary painting styles. Our collection features carefully designed digital artworks that capture the elegance, emotion, and beauty of traditional paintings – all delivered instantly as high-resolution PDF files.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Our Story</h3>
        <p>
          DigitalPeinture was born from a deep passion for art and a desire to make it accessible to everyone. We believe that everyone deserves to surround themselves with inspiring and beautiful imagery, whether in their home, office, or personal creative space. By offering digital downloads, we eliminate the barriers of shipping costs, long wait times, and limited availability, allowing art lovers worldwide to enjoy gallery-quality pieces at an affordable price.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">What We Offer</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Printable Digital Art PDFs</strong>: Each piece is designed with attention to detail, optimized for printing on standard home printers or professional services.</li>
          <li><strong>Instant Access</strong>: Purchase and download your files immediately – no waiting required.</li>
          <li><strong>Versatile Formats</strong>: Our PDFs are ready to print in various sizes (A4, A3, letter, and more), perfect for framing, wall decor, journaling, or creative projects.</li>
          <li><strong>Diverse Collection</strong>: From timeless classical reproductions to modern interpretations, abstract works, floral designs, landscapes, and more – there’s something for every taste and style.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Quality First</strong>: Every artwork is crafted or selected with care to ensure vibrant colors, sharp details, and artistic integrity.</li>
          <li><strong>Customer Satisfaction</strong>: We strive to provide an easy, secure, and enjoyable shopping experience.</li>
          <li><strong>Eco-Friendly</strong>: As a fully digital store, we reduce waste and environmental impact – no physical packaging or shipping needed.</li>
        </ul>

        <p className="mt-6 italic">
          Whether you&apos;re decorating your home, looking for unique gifts, or simply love collecting beautiful art, DigitalPeinture is here to help you bring creativity and inspiration into your life.
        </p>

        <p className="mt-8">
          Thank you for supporting our small creative business. We’re thrilled to be part of your artistic journey!
        </p>
        
        <div className="mt-8 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <p className="font-bold text-lg mb-2">The DigitalPeinture Team</p>
            <p>[Your Name or Business Name]</p>
            <p>Contact: <a href="mailto:hello@digitalpeinture.com" className="text-purple-600 hover:text-purple-700">hello@digitalpeinture.com</a></p>
            <p>Website: digitalpeinture.com</p>
        </div>
      </div>
    </div>
  );
}
