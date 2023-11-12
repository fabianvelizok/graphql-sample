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

module.exports = {
    getAllProducts
}