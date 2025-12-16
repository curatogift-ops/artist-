import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: (props: any) => <Facebook {...props} />,
        },
        {
            name: "Instagram",
            href: "#",
            icon: (props: any) => <Instagram {...props} />,
        },
        {
            name: "Twitter",
            href: "#",
            icon: (props: any) => <Twitter {...props} />,
        },
    ],
};

export function Footer() {
    return (
        <footer className="bg-vintage-cream border-t border-vintage-sepia/10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        <span className="font-serif text-xl font-bold text-vintage-sepia">
                            Vintage Art
                        </span>
                        <p className="text-sm leading-6 text-vintage-charcoal/80 text-center sm:text-left">
                            Preserving history through digital art.
                        </p>
                    </div>

                    <div className="flex gap-x-8">
                        {navigation.main.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-vintage-charcoal hover:text-vintage-sepia">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-12 border-t border-vintage-sepia/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex justify-center space-x-6">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-vintage-charcoal/60 hover:text-vintage-sepia">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-vintage-charcoal/60">
                        <Mail className="h-4 w-4" />
                        <span>contact@vintageart.com</span>
                    </div>
                    <p className="text-xs leading-5 text-vintage-charcoal/60">
                        &copy; {new Date().getFullYear()} Vintage Art Marketplace. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
