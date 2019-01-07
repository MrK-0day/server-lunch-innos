const resolvers = {
  Query: {
    Employees: (root, args, { models }) => {},
    getEmployees: (root, args, { models }) => {},
    Admin: (root, args, { models }) => {},
    getAdmin: (root, args, { models }) => {},
    Dish: (root, args, { models }) => {},
    getDish: (root, args, { models }) => {},
    Order: (root, args, { models }) => {},
    getOrder: (root, args, { models }) => {}
  },
  Order: {
    Employees: (root, args, { models }) => {
      return {}
    },
    Dish: (root, args, { models }) => {
      return {}
    }
  },
  Mutation: {
    resetAll: (root, args, { models }) => {},
    changePassword: (root, args, { tomodelsken }) => {},
    addEmployees: (root, args, { models }) => {},
    updateEmployees: (root, args, { models }) => {},
    removeEmployees: (root, args, { models }) => {},
    addAdmin: (root, args, { models }) => {},
    updateAdmin: (root, args, { models }) => {},
    removeAdmin: (root, args, { models }) => {},
    addDish: (root, args, { models }) => {},
    updateDish: (root, args, { models }) => {},
    removeDish: (root, args, { models }) => {},
    addOrder: (root, args, { models }) => {},
    updateOrder: (root, args, { models }) => {},
    removeOrder: (root, args, { models }) => {}
  }
}

export default resolvers
