const axios = require('axios').default

// BOOKING GET BY ID FUNCTION
async function bookingGetByIdRes(ids, token) {
  try {
    const getBookingDetail = await axios({
      method: 'get',
      url: `http://localhost:4001/api/v1/booking/view/${ids}`,
      data: {},
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log('getBookingDetail', getBookingDetail)
    return await getBookingDetail.data
  } catch (error) {
    console.log(error)
  }
}

module.exports = { bookingGetByIdRes }
