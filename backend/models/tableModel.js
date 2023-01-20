const mongoose = require('mongoose')

const tableSchema = mongoose.Schema({
  server: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  tableNum: {
    type: String,
    required: [true, "Please add Table Number"]
  },
  seats: {
    type: Number,
    required: [true, "Please add Number of Seats"]
  },
  status: {
    type: String
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Table', tableSchema)