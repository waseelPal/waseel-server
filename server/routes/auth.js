module.exports = (router) => {
  router.post('/login', (req, res) => {
    const userLoginInfo = req.body || {};
    const messageObj = {
      statusCode: 201,
      error: null
    }
    console.log(users);
    res.json(messageObj);
  });
}