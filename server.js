const path = require('node:path')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const products = require('./products/products.model')
const orders = require('./orders/orders.model')

const typesArray = loadFilesSync(path.join(__dirname, '**/**.graphql'))

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: {
        Query: {
            products: async (parent) => parent.products,
            orders: async (parent) => parent.orders
        }
    }
})

const app = express()
const rootValue = {
    products,
    orders
}

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Running graphql server on port 3000...')
})