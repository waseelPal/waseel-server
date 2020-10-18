if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./server/server');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`API running at localhost:${port}/api`);
});