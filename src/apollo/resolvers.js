import uuidV4 from 'uuid/v4'

const resolvers = {
  Query: {
    Employee: (root, args, { models }) => {},
    Employees: (root, args, { models }) => models.employee.find(),
    Admin: (root, args, { models }) => {},
    Admins: (root, args, { models }) => {},
    Dish: (root, args, { models }) => {},
    Dishes: (root, args, { models }) => {},
    Order: (root, args, { models }) => {},
    Orders: (root, args, { models }) => {}
  },
  Order: {
    employees: (root, args, { models }) => {
      return {}
    },
    dish: (root, args, { models }) => {
      return {}
    }
  },
  Mutation: {
    resetAll: (root, args, { models }) => {},
    changePassword: (root, args, { tomodelsken }) => {},
    createEmployees: (root, args, { models }) => {
      const newEmployee = new models.employee(args)
      newEmployee._id = uuidV4()
      return newEmployee.save()
    },
    updateEmployees: (root, args, { models }) => {},
    deleteEmployees: (root, args, { models }) => {},
    createAdmin: (root, args, { models }) => {},
    updateAdmin: (root, args, { models }) => {},
    deleteAdmin: (root, args, { models }) => {},
    createDish: (root, args, { models }) => {},
    updateDish: (root, args, { models }) => {},
    deleteDish: (root, args, { models }) => {},
    createOrder: (root, args, { models }) => {},
    updateOrder: (root, args, { models }) => {},
    deleteOrder: (root, args, { models }) => {}
  }
}

export default resolvers
