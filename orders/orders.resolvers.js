const { getAllOrders } = require('./orders.model')

module.exports = {
    Query: {
        orders: async (parent) => getAllOrders()
    }
}