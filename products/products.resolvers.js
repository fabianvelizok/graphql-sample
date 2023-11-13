const { getAllProducts, getProductsByPrice, getProductByID } = require('./products.model')

module.exports = {
    Query: {
        products: () => getAllProducts(),
        productsByPrice: (_, { minPrice, maxPrice }) => getProductsByPrice(minPrice, maxPrice),
        product: (_, { id }) => getProductByID(id)
    }
}