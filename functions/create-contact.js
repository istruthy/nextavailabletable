const sendQuery = require("./utils/send-query")

const CREATE_CONTACT = `
mutation($zipcode: String!, $name: String!, $email: String!) {
  createContact(data:{zipcode: $zipcode, name: $name, email: $email}) {
    _id
    name
    zipcode
    email
   }
  }

`
exports.handler = async event => {
  console.log("event body ", event.body)

  const { email, zipcode, name } = JSON.parse(event.body)
  const { data, errors } = await sendQuery(CREATE_CONTACT, {
    email,
    zipcode,
    name,
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ contact: data.createContact }),
  }
}
