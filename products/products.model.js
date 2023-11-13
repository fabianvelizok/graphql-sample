const products = [
    {
        id: 'red-shoe',
        description: 'A red shoe',
        price: 42.50,
        reviews: []
    },
    {
        id: 'blue-jean',
        description: 'A blue jean',
        price: 20.00,
        reviews: []
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

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }
    products.push(newProduct)
    return newProduct
}

function addNewProductReview(productID, rating, comment) {
    const product = getProductByID(productID)
    if (product) {
        const newReview = { rating, comment }
        product.reviews.push(newReview)
        return newReview
    }
    return console.error(`Product with id: ${productID} not found!`)
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductByID,
    addNewProduct,
    addNewProductReview
}