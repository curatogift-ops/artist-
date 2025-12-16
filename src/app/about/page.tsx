export default function About() {
    return (
        <div className="bg-vintage-offwhite py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h1 className="text-4xl font-bold tracking-tight text-vintage-charcoal sm:text-6xl font-serif">
                        Our Story
                    </h1>
                    <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-vintage-charcoal/80 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <p>
                                Welcome to Vintage Art Marketplace, a curated collection born from a deep passion for classical aesthetics and historical beauty. We believe that art is timeless, and its ability to inspire shouldn't be limited by physical location or ownership.
                            </p>
                            <p className="mt-8">
                                Our journey began with a simple appreciation for the textures, strokes, and emotions captured in vintage paintings. Realizing that many of these masterpieces are inaccessible to the public, we set out to digitize and restore them, making them available for everyone to enjoy in their own homes.
                            </p>
                        </div>
                        <div>
                            <p>
                                We are committed to quality and preservation. Each piece in our collection is carefully selected and processed to ensure the highest resolution and color fidelity. By offering these works as digital downloads, we empower you to print them on canvas, paper, or any medium you choose, giving old art a new life in modern spaces.
                            </p>
                            <p className="mt-8">
                                Whether you are an interior designer, an art collector, or simply someone who appreciates beauty, we hope our collection brings a touch of history and elegance to your world.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 sm:mt-24 lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-12">
                            <h2 className="text-3xl font-bold tracking-tight text-vintage-charcoal sm:text-4xl font-serif mb-6">
                                The Collection
                            </h2>
                            <p className="text-lg text-vintage-charcoal/70 mb-4">
                                Our gallery features a diverse range of styles including Victorian portraits, Renaissance-inspired scenes, pastoral landscapes, and classical still lifes.
                            </p>
                            <p className="text-lg text-vintage-charcoal/70">
                                All artworks are provided in high-resolution PDF and JPG formats (300 DPI), suitable for large-format printing. Upon purchase, you receive instant access to the files, granting you the freedom to use them for personal decoration or creative projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
