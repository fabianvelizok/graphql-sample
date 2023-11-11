const express = require('express')
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }
    
    type Product {
        id: ID!
        description: String!
        price: Float!
        reviews: [Review]
    }
    
    type Review {
        rating: Int!
        comment: String
    }
    
    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }
    
    type OrderItem {
        product: Product!
        quantity: Int!
    }
`)

const root = {
    products: [
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
    ],
    orders: [
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
}

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Running graphql server on port 3000...')
})