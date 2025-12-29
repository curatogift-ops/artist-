import { Product } from '@/types';

// Seeded random number generator to ensure consistent results on server and client
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  random() {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }
}

const generateProducts = (): Product[] => {
  const rng = new SeededRandom(12345); // Fixed seed for consistency
  const products: Product[] = [];
  const styles = ['Abstract', 'Landscape', 'Portrait', 'Minimalist', 'Surreal', 'Impressionist', 'Geometric', 'Fluid'];
  const moods = ['Calm', 'Vibrant', 'Dark', 'Ethereal', 'Energetic', 'Melancholic'];
  const colorsList = ['#FF6B6B', '#4ECDC4', '#FFA500', '#FFD700', '#2C3E50', '#E74C3C', '#8E44AD', '#3498DB', '#1ABC9C', '#95A5A6'];

  for (let i = 1; i <= 100; i++) {
    // Weighted Price Logic
    let price;
    const r = rng.random();
    if (r < 0.3) {
      // 30% - $25-$100
      price = Math.floor(rng.random() * (100 - 25 + 1)) + 25;
    } else if (r < 0.7) {
      // 40% - $101-$300
      price = Math.floor(rng.random() * (300 - 101 + 1)) + 101;
    } else if (r < 0.9) {
      // 20% - $301-$500
      price = Math.floor(rng.random() * (500 - 301 + 1)) + 301;
    } else {
      // 10% - $501-$600
      price = Math.floor(rng.random() * (600 - 501 + 1)) + 501;
    }

    const style = styles[Math.floor(rng.random() * styles.length)];
    const mood = moods[Math.floor(rng.random() * moods.length)];
    const color = colorsList[Math.floor(rng.random() * colorsList.length)];
    
    const sampleImages = [
      '/digital-painter/0477f3cd-a004-4454-b178-7282f41cd574.jpg',
      '/digital-painter/04df770e-2d6e-4f78-88ad-a14be1059cc0.jpg',
      '/digital-painter/0761c100-a5e4-4cb2-a1c2-d066b1bd415c.jpg',
      '/digital-painter/0ba83c92-5b02-4fd3-b1ef-fbffb94635a0.jpg',
      '/digital-painter/0e7d7591-cbf4-46d8-839e-106acc0e1eaa.jpg',
      '/digital-painter/0f5db982-133d-4864-ac2c-f5064d19a24f.jpg',
      '/digital-painter/1184b2f2-d19d-4811-82f0-0ca5cf8c0f17.jpg',
      '/digital-painter/1b4faaf1-902e-45c8-a90d-023cd34df1f1.jpg',
      '/digital-painter/21450a94-fd0c-4926-835c-64899ae1636a.jpg',
      '/digital-painter/223c51e8-6896-48d5-8617-7c79a333e3d6.jpg',
      '/digital-painter/2a8cb4f6-6fcc-4ad8-894c-adb3cf669b85.jpg',
      '/digital-painter/2b05f314-c381-4fda-abab-9624f0923ba2.jpg',
      '/digital-painter/2fdde0e4-1424-454c-822f-306f00a1e114.jpg',
      '/digital-painter/32bb0d6d-062d-4408-806c-f6625978474c.jpg',
      '/digital-painter/34461902-cf33-4ba9-9d8e-186b6ce08b6b.jpg',
      '/digital-painter/38be5b20-52e7-4a6c-9702-48a9742be46e.jpg',
      '/digital-painter/3ad101c3-d2a5-4aee-ac12-18524eae98be.jpg',
      '/digital-painter/41fceee9-bbdc-4cba-a6dc-178b1e0666e3.jpg',
      '/digital-painter/45097ada-7411-4287-8faa-269e34a09142.jpg',
      '/digital-painter/49a0ab3c-84e3-40cc-8d41-eb3855c32e98.jpg',
      '/digital-painter/5383478e-bd36-4afa-9f8b-e22fd6be1d8b.jpg',
      '/digital-painter/5b3049ae-d3f3-4aff-85e0-d0b6f2e4a473.jpg',
      '/digital-painter/5fbd2c1a-80fd-4666-ae4c-a0e24e4794a9.jpg',
      '/digital-painter/6471bc54-b8f4-4d16-8540-b10779679edf.jpg',
      '/digital-painter/6effc083-8410-4ac9-abfb-789a7f198fb4.jpg',
      '/digital-painter/6f17ac34-7931-466c-9b48-a6120f2d5fb5.jpg',
      '/digital-painter/6ffd7188-c249-4d85-98d3-cb6ddeeae0c3.jpg',
      '/digital-painter/7a1a849b-854e-4738-b3e3-70a355e585c3.jpg',
      '/digital-painter/7d45f68e-4fcc-4daf-ac53-8cfa481128ce.jpg',
      '/digital-painter/84146e9d-ee4f-4cce-9e78-fab178b99615.jpg',
      '/digital-painter/873cbd03-0c9c-4050-98f8-8edcfdda7b8a.jpg',
      '/digital-painter/885cf7bb-7dc4-4f2b-ade8-9b196af6f4d9.jpg',
      '/digital-painter/90c6ab81-08ad-48f5-bdbf-91d5c7aa499c.jpg',
      '/digital-painter/91e5bfc9-c848-47e7-9af7-b85af7cfe28a.jpg',
      '/digital-painter/9513a4cf-c545-4724-90a5-f3d2edd63ea8.jpg',
      '/digital-painter/95afc788-bf2a-403a-be9d-28f62ac3be96.jpg',
      '/digital-painter/9d98e07c-3fdf-4180-a337-179a2bae7171.jpg',
      '/digital-painter/a23f02e3-d3f0-442c-add7-1916a084728a.jpg',
      '/digital-painter/a550e37b-ef61-42bc-9f9b-6cde31163094.jpg',
      '/digital-painter/a6f488db-e490-4817-8a67-cd2e99c30ac6.jpg',
      '/digital-painter/a83c5b78-cdfa-458b-bc19-f4e2f1e276e7.jpg',
      '/digital-painter/ac69e31b-2499-411d-a4d3-84f151485cc3.jpg',
      '/digital-painter/aef50909-2835-46a1-b37e-6e2e4676400e.jpg',
      '/digital-painter/aff27acb-b9a3-4dfb-8c54-feb05b04769d.jpg',
      '/digital-painter/b4362a5b-6991-4458-8914-15a4d2673a9b.jpg',
      '/digital-painter/b9c95922-a613-4ffc-988d-a83514bfa28d.jpg',
      '/digital-painter/bd83bfdc-dc03-479c-ba08-47b7208fc811.jpg',
      '/digital-painter/c216fd47-35c9-4b67-ac81-94ef9faebe7b.jpg',
      '/digital-painter/c4ef6a30-f650-4c93-80c6-bb95452d4086.jpg',
      '/digital-painter/c5c3cabf-7aa1-411b-9757-ab181d9b5723.jpg',
      '/digital-painter/c84b600c-83c1-40fa-97cd-2eb80dd068e4.jpg',
      '/digital-painter/ca7dd7f1-fa05-4008-9fa8-59e7063875a9.jpg',
      '/digital-painter/da5d6d06-12d4-4f2b-b6e4-e12a9eebb6e7.jpg',
      '/digital-painter/dd28db39-af01-4b15-a51a-eeb577efa55c.jpg',
      '/digital-painter/ddf5a44c-b335-4efb-a8ff-e10cca3ede1f.jpg',
      '/digital-painter/de2ce3be-d839-48bf-96ef-ed55a0c63f6c.jpg',
      '/digital-painter/dfe4e8ce-4e1e-4a1c-b055-89f9c144e5f8.jpg',
      '/digital-painter/ecdc27cb-42a5-4d6f-9066-23aa6ce9257a.jpg',
      '/digital-painter/eea4cf2b-bf4b-4586-9e68-e5fcf0f94402.jpg',
      '/digital-painter/f054e16f-48de-40d6-b3b5-5e4ad85ec748.jpg',
      '/digital-painter/f4bd57db-df5e-47c5-99c9-aa63dba556f4.jpg',
      '/digital-painter/ff93f50c-7b20-42cd-975f-1a18ee5a54f0.jpg'
    ];
    const placeholderUrl = sampleImages[i % sampleImages.length];

    products.push({
      id: `painting-${String(i).padStart(3, '0')}`,
      title: `${style} No. ${i}`,
      price_usd: price,
      image: placeholderUrl, // In real app: `/images/paintings/painting-${i}.jpg`
      thumbnail: placeholderUrl, // In real app: `/images/thumbnails/painting-${i}-thumb.jpg`
      description: `A stunning ${mood.toLowerCase()} ${style.toLowerCase()} digital painting. This high-resolution PDF allows you to print consistent gallery-quality art at home or with a professional service. Features dominant tones of ${color}.`,
      tags: [style, mood, 'Digital'],
      colors: [color],
      dimensions: '24x36 inches',
      file_size: `${Math.floor(rng.random() * 20 + 5)} MB`
    });
  }
  return products;
};

export const products = generateProducts();
