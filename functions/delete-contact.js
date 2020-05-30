const sendQuery = require("./utils/send-query")

const DELETE_CONTACT = `
mutation($id: ID!) {
  deleteContact(id: $id) {
    _id
  }
}
`
