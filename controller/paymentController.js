const Razorpay = require('razorpay')
const { bookingGetByIdRes } = require('../service/bookingService')
const Payment = require('../model/paymentModel')

const razorpayInstance = new Razorpay({
  key_id: 'rzp_test_wL4gyhuJy1KDiQ',
  key_secret: '4nw51M2BuFwPB0dixnBXtJx9'
})

// PAYMENT GATEWAY API
const paymentGateway = async (req, res) => {
  try {
    const bookingId = req.query.bookingId
    const userId = req.query.userId

    const options = {
      amount: parseInt(req.body.amount) * 100,
      currency: 'INR',
      receipt: 'order_receipt_1',
      notes: {
        key1: 'value1',
        key2: 'value2'
      }
    }

    // Create the Razorpay order
    const order = await razorpayInstance.orders.create(options)
    console.log('order', order)
    let order2 = await new Razorpay({
      order_id: order.id,
      key_id: 'rzp_test_wL4gyhuJy1KDiQ',
    })
    order2 = order2.open()
    console.log('order2', order2)
    let payment = new Payment({
      bookingId,
      userId,
      orderId: order.id,
      paymentId: order.razorpay_payment_id,
      amount: req.body.amount
    })
    console.log('payment', payment)
    await payment.save()
    return res.status(200).json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      bookingId,
      order2
    })
  } catch (error) {
    console.log('error', error)
    return res.status(500).json({ message: 'Unable to do Payment!', error: error })
  }
}

module.exports = { paymentGateway }
