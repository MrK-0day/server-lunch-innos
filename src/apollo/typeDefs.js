const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Employee {
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
    employeeID: String
    dishID: String
    date: String
    count: Int
    node: String
    isComplete: Boolean
    employees: [Employee]
    dish: Dish
  }
  type Query {
    Employee(_id: ID!): Employee
    Employees: [Employee]
    Admin(_id: ID!): Admin
    Admins: [Admin]
    Dish(_id: ID!): Dish
    Dishes: [Dish]
    Order(_id: ID!): Order
    Orders: [Order]

    signIn(username: String!, password: String!): Admin
  }
  type Mutation {
    resetAll(confirm: String!): Boolean
    changePassword(_id: ID!, password: String!): Admin

    createEmployees(fbID: ID!, token: String!, email: String!, name: String!): Employee
    updateEmployees(_id: ID!, fbID: String, token: String!, email: String, name: String): Employee
    deleteEmployees(_id: ID!): Boolean

    createAdmin(username: String!, password: String!): Admin
    updateAdmin(_id: ID!, isPublic: Boolean, isLock: Boolean): Admin
    deleteAdmin(_id: ID!): Boolean

    createDish(name: String!, count: String!): Dish
    updateDish(_id: ID!, name: String, count: String): Dish
    deleteDish(_id: ID!): Boolean

    createOrder(idEmployees: String!, idDish: String!, count: Int!, node: String!): Order
    updateOrder(_id: ID!, idDish: String, count: Int, node: String): Order
    deleteOrder(_id: ID!): Boolean
  }
`

export default typeDefs