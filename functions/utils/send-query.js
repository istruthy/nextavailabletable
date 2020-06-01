require("dotenv").config()
const axios = require("axios")

module.exports = async (query, variables) => {
  const results = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SERVER_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  })

  return results.data
}
