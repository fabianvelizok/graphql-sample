const { getAllProducts, getProductsByPrice, getProductByID, addNewProduct, addNewProductReview } = require('./products.model')

module.exports = {
    Query: {
        products: () => getAllProducts(),
        productsByPrice: (_, { minPrice, maxPrice }) => getProductsByPrice(minPrice, maxPrice),
        product: (_, { id }) => getProductByID(id)
    },
    Mutation: {
        addNewProduct: (_, args) => addNewProduct(args.id, args.description, args.price),
        addNewProductReview: (_, args) => addNewProductReview(args.id, args.rating, args.comment)
    }
}