const mongoose = require('mongoose')

const payment = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.ObjectId,
      require: true
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      require: true
    },
    orderId: {
      type: String,
      default: true
    },
    paymentId: {
      type: String,
      default: true
    },
    amount: {
      type: String,
      default: true
    }
  },
  {
    timestamps: true
  }
)

const Payment = mongoose.model('Payment', payment)

module.exports = Payment
