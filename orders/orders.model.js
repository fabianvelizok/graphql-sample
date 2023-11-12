const orders = [
    {
        date: '2005-05-05',
        subtotal: 85.00,
        items: [
            {
                product: {
                    id: 'red-shoe',
                    description: 'A red shoe',
                    price: 42.50
                },
                quantity: 2
            }
        ]
    }
]

function getAllOrders() {
    return orders
}

module.exports = {
    getAllOrders
}