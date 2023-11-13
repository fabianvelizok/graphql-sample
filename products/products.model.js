const products = [
    {
        id: 'red-shoe',
        description: 'A red shoe',
        price: 42.50
    },
    {
        id: 'blue-jean',
        description: 'A blue jean',
        price: 20.00
    }
]

function getAllProducts() {
    return products
}

function getProductsByPrice(minPrice, maxPrice) {
    return products.filter(p => p.price >= minPrice && p.price <= maxPrice)
}

function getProductByID(id) {
    return products.find(p => p.id === id)
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductByID
}