const JWTService = require('../utils/JWTtoken');
const tokenModel = require('../model/tokenModel');
const userModel = require('../model/userModel');

async function isValidToken(req, res, next) {
  try {
    let { token } = req.headers;
    token = token.split(' ')[1];
    if (token) {
      JWTService.verifyToken(token);
      //verification token in db
      const result = await tokenModel.findOne({ token });
      if (result) {
        next();
      } else {
        res
          .status(400)
          .json({ status: 'failed', message: 'Token is not present in DB' });
      }
    } else {
      res
        .status(400)
        .json({ status: 'failed', message: 'Token is not present in header' });
    }
  } catch (error) {
    res.json({
      status: 'token error',
      error,
    });
  }
}

async function isAdmin(req, res, next) {
  try {
    let { token } = req.headers;
    token = token.split(' ')[1];
    const response = await JWTService.verifyToken(token);
    const result = await tokenModel.findOne({ token });

    const userDetails = await userModel.findById(result.userId);

    if (!response || !result || !userDetails || userDetails.role !== 'ADMIN') {
      return res.status(300).json({
        message: 'User is not Admin.Only Admin can access this route',
      });
    }

    next();
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  isValidToken,
  isAdmin,
};
