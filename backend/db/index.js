const mongoose = require('mongoose')
const dbConnection = () => {
  try {
    mongoose.connect(
      'mongodb+srv://Diegoc:diego1234@cluster0.1qmr3.mongodb.net/node-Todo',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log('DB Connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnection
