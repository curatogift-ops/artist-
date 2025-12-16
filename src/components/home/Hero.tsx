import Link from "next/link";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-vintage-sepia py-24 sm:py-32">
            {/* Background decoration */}
            <div
                className="absolute inset-0 -z-10 opacity-20 mixing-blend-multiply"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }}
            />
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-vintage-cream sm:text-6xl font-serif">
                        Discover Timeless Masterpieces
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-vintage-offwhite/90">
                        A curated collection of vintage paintings and classical artwork, available as high-resolution digital downloads for your home or creative projects.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="#collection"
                            className="rounded-md bg-vintage-gold px-3.5 py-2.5 text-sm font-semibold text-vintage-sepia shadow-sm hover:bg-vintage-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vintage-gold transition-colors duration-300"
                        >
                            Browse Collection
                        </Link>
                        <Link href="/about" className="text-sm font-semibold leading-6 text-vintage-cream">
                            Our Story <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
