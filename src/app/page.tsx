import { Hero } from "@/components/home/Hero";
import { HomeGallery } from "@/components/home/HomeGallery";

export default function Home() {
  return (
    <div className="bg-vintage-offwhite">
      <Hero />
      <HomeGallery />
    </div>
  );
}
