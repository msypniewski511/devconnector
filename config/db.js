const mongoose = require('mongoose')
const config = require('config')
const uri = config.get('mongoURI')
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
}

const connectDB = async () => {
  try {
    await mongoose.connect(uri, clientOptions)

    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
