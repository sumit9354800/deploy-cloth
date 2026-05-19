// Frontend copy of fallback products used when API/network fails
const fallbackProducts = [
  {
    _id: 'fallback1',
    name: 'Classic White T-Shirt',
    description: 'Premium cotton classic fit white t-shirt.',
    price: 999,
    category: 'Men',
    stock: 50,
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Black'],
    ratings: 4.5,
    images: [{ url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500' }]
  },
  {
    _id: 'fallback2',
    name: 'Floral Print Dress',
    description: 'Beautiful floral print summer dress.',
    price: 1999,
    category: 'Women',
    stock: 25,
    size: ['XS', 'S', 'M', 'L'],
    color: ['Pink', 'White'],
    ratings: 4.7,
    images: [{ url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500' }]
  }
];

export default fallbackProducts;
