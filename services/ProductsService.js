const PRODUCTS = [
    {
        id: 100,
        name: 'Ferguson',
        price: 350000,
        image: require('../assets/products/image-1.jpg'),
        description: 'A Highly coupled engine with turbo mode.',
        orderType:'Buy'
    },
    {
        id: 101,
        name: 'Tractor',
        price: 603470,
        image: require('../assets/products/image-2.jpg'),
        description: 'A Highly coupled engine with turbo mode.',
        orderType:'Rent'
    },
    {
        id: 102,
        name: 'Turbo Engine',
        price: 200021,
        image: require('../assets/products/image-3.jpg'),
        description: 'A Highly coupled engine with turbo mode.',
        orderType:'Renr'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

