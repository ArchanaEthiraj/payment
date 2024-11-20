const initializeRoutes = (app) => {
    app.use('/api/v1', require('./v1/paymentRoutes.js'));
};

module.exports = initializeRoutes;