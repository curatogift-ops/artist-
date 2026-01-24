import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Have a question about a digital art piece? Need help with your download? We&apos;re here to assist you!
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-zinc-500 mb-1">For general inquiries and support</p>
                        <a href="mailto:hello@digitalpeinture.com" className="text-purple-600 font-medium hover:underline">hello@digitalpeinture.com</a>
                    </div>
                </div>




            </div>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form action="https://formsubmit.co/support@digitalpeinturepdf.com" method="POST" className="space-y-4">
                {/* Configuration for FormSubmit */}
                <input type="hidden" name="_subject" value="New Contact Inquiry from DigitalPeinture" />
                <input type="hidden" name="_captcha" value="false" />
                {/* <input type="hidden" name="_next" value="https://yourwebsite.com/thanks" /> Optional: Add redirect page */}

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" id="name" name="name" required className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-purple-600 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" name="email" required className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-purple-600 outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea id="message" name="message" rows={4} required className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:ring-2 focus:ring-purple-600 outline-none transition-all" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-lg hover:opacity-90 transition-opacity">
                    Send Message
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}
