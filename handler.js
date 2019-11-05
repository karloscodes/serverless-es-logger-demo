const Log = require('serverless-es-logger')

module.exports.hello = async (event, context) => {
  try {
    Log.info({ message: 'This is my message', extra: 1, event: event })
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v1.0! Your function executed successfully!',
          input: event
        },
        null,
        2
      )
    }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
  } catch (error) {
    Log.error({ err: error })
  }
}
