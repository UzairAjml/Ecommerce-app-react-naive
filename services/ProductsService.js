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
        price: 20194,
        image: require('../assets/products/image-3.jpg'),
        description: 'A Highly coupled engine with turbo mode.',
        orderType:'Rent'
    },
    {
        id: 103,
        name: 'Turbo Truck',
        price: 286841,
        image: require('../assets/products/image-4.jpg'),
        description: 'A Highly coupled truck with turbo mode.',
        orderType:'Rent'
    },
    {
        id: 104,
        name: 'Pillow Truck',
        price: 208741,
        image: require('../assets/products/image-5.jpg'),
        description: 'With a high perfomanace engine.',
        orderType:'Buy'
    },
    {
        id: 105,
        name: 'The Beast',
        price: 20761,
        image: require('../assets/products/image-6.jpg'),
        description: 'the beast is here.',
        orderType:'Buy'
    },
    {
        id: 106,
        name: 'Soothing Machine',
        price: 2034021,
        image: require('../assets/products/image-7.jpg'),
        description: 'Safe and smooth to every surface',
        orderType:'Rent'
    }
    
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

