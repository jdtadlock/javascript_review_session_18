const router = require('express').Router();
const { User } = require('../db');
const { generateToken } = require('../auth');


router.post('/register', (req, res) => {
  User.create(req.body)
    .then(user => {
      res.send({
        success: 1,
        message: 'Registration Successful!',
        token: generateToken(user._id)
      })
    }).catch(err => res.send({ success: 0, message: err }));
});



module.exports = router;