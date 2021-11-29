const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'This is Add Custommer API' }),
  }
}

module.exports = { handler: addCustomer }
