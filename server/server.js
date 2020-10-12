const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const router = express.Router();

// Enable cors
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// logging middleware
router.use(function (req, res, next) {
  console.log('\nReceived:', {
    url: req.originalUrl,
    body: req.body,
    query: req.query
  });
  next();
});

app.use('/api', router);
app.listen(port, () => {
  console.log(`API running at localhost:${port}/api`);
});