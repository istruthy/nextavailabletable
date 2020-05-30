const sendQuery = require("./utils/send-query")

const GET_ALL_CONTACTS = `
  query {
    allContacts {
      data {
        name
        _id
        email
        zipcode  
    }
  }
}
`

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_CONTACTS)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ todos: data.allContacts.data }),
  }
}
