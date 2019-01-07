const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Employees {
    _id: ID
    fbID: ID
    token: String
    email: String
    name: String
  }
  type Admin {
    _id: ID
    username: String
    password: String
    isPublic: Boolean
    isLock: Boolean
  }
  type Dish {
    _id: ID
    name: String
    count: Int
    date: Int
  }
  type Order {
    _id: ID
    Employees: Employees
    Dish: Dish
    date: String
    count: Int
    node: String
    isComplete: Boolean
  }
  type Query {
    Employees(_id: ID!): Employees
    getEmployees: [Employees]
    Admin(_id: ID!): Admin
    getAdmin: [Admin]
    Dish(_id: ID!): Dish
    getDish: [Dish]
    Order(_id: ID!): Order
    getOrder: [Order]

    signIn(username: String!, password: String!): Admin
  }
  type Mutation {
    resetAll(confirm: String!): Boolean
    changePassword(_id: ID!, password: String!): Admin

    addEmployees(fbID: ID!, token: String!, email: String!, name: String!): Employees
    updateEmployees(_id: ID!, fbID: String, token: String!, email: String, name: String): Employees
    removeEmployees(_id: ID!): Boolean

    addAdmin(username: String!, password: String!): Admin
    updateAdmin(_id: ID!, isPublic: Boolean, isLock: Boolean): Admin
    removeAdmin(_id: ID!): Boolean

    addDish(name: String!, count: String!): Dish
    updateDish(_id: ID!, name: String, count: String): Dish
    removeDish(_id: ID!): Boolean

    addOrder(idEmployees: String!, idDish: String!, count: Int!, node: String!): Order
    updateOrder(_id: ID!, idDish: String, count: Int, node: String): Order
    removeOrder(_id: ID!): Boolean
  }
`

export default typeDefs