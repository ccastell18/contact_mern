const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');
  //check for token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    //gets user payload
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    //sets the user payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
