const fs = require('fs');

// Read the file
const filePath = 'src/data/artworks.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Add price to each artwork object
// Prices range from $299 to $599
const prices = [299, 349, 399, 449, 499, 549, 599];
let priceIndex = 0;

content = content.replace(/mood: "([^"]+)"/g, (match, mood) => {
    const price = prices[priceIndex % prices.length];
    priceIndex++;
    return `mood: "${mood}",\n        price: ${price}`;
});

// Write back
fs.writeFileSync(filePath, content);
console.log('Successfully added prices to all artworks!');
