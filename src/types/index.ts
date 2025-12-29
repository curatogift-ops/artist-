export interface Product {
    id: string;
    title: string;
    price_usd: number;
    image: string;
    thumbnail: string;
    description: string;
    tags: string[];
    colors: string[];
    dimensions?: string;
    file_size?: string;
}

export interface CartItem extends Product {
    quantity: number;
}
