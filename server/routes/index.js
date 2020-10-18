const router = require('express').Router();
const authRoutes = require('./auth');

// logging middleware
router.use(function (req, res, next) {
  console.log('\nReceived:', {
    url: req.originalUrl,
    body: req.body,
    query: req.query
  });
  next();
});

authRoutes(router);

module.exports = router;