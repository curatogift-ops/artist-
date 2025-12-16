import { Product } from "@/context/CartContext";

export const products: Product[] = [
    {
        id: "1",
        title: "Portrait of a Young Woman",
        artistName: "Unknown Artist",
        description: "A stunning Dutch Golden Age portrait with exquisite lighting and detail.",
        price: 49.00,
        thumbnailImage: "/images/paintings/portrait-young-woman.png",
        category: "Portrait",
        yearCreated: "c. 1650",
        dimensions: "Digital Download"
    },
    {
        id: "2",
        title: "The Old Mill",
        artistName: "Vincent van Gogh style",
        description: "A vibrant landscape capturing the rustic charm of an old mill by the river.",
        price: 39.00,
        thumbnailImage: "/images/paintings/old-mill.png",
        category: "Landscape",
        yearCreated: "1888",
        dimensions: "Digital Download"
    },
    {
        id: "3",
        title: "Still Life with Flowers",
        artistName: "Rachel Ruysch",
        description: "An intricate floral arrangement showcasing the beauty and transience of nature.",
        price: 55.00,
        thumbnailImage: "/images/paintings/still-life-flowers.png",
        category: "Still Life",
        yearCreated: "1700",
        dimensions: "Digital Download"
    },
    {
        id: "4",
        title: "The Majestic Ship",
        artistName: "William Turner style",
        description: "A dramatic seascape featuring a ship battling the elements.",
        price: 45.00,
        thumbnailImage: "/images/paintings/majestic-ship.png",
        category: "Seascape",
        yearCreated: "1840",
        dimensions: "Digital Download"
    },
    {
        id: "5",
        title: "Peasant Life",
        artistName: "Jean-François Millet",
        description: "A touching depiction of rural life and honest labor.",
        price: 42.00,
        thumbnailImage: "/images/paintings/peasant-life.png",
        category: "Genre",
        yearCreated: "1857",
        dimensions: "Digital Download"
    },
    {
        id: "6",
        title: "Abstract Composition",
        artistName: "Kandinsky style",
        description: "A colorful and dynamic abstract composition exploring form and emotion.",
        price: 59.00,
        thumbnailImage: "/images/paintings/abstract-composition.png",
        category: "Abstract",
        yearCreated: "1923",
        dimensions: "Digital Download"
    }
];
