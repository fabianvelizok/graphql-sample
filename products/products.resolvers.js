const { getAllProducts } = require('./products.model')

module.exports = {
    Query: {
        products: async (parent) => getAllProducts()
    }
}