const jwt = require('jsonwebtoken');
let secret = process.env.SECRET;

function generateToken(id) {
  return jwt.sign({ userId: id }, secret);
}

function isAuthenticated(req, res, next) {

  if (!req.headers.authorization) return res.status(401).send({ message: 'You are not authorized' });


  let token = req.headers.authorization;

  if (token.includes('Bearer'))
    token = token.split(' ')[1];

  jwt.verify(token, secret, (err, data) => {
    if (err) return res.status(500).send({ message: err });

    return next();
  });
}

module.exports = {
  generateToken,
  isAuthenticated
}