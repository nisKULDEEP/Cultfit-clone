const userModel = require('../model/userModel');

module.exports.addUser = async (req, res) => {};

const getAllUsers = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const skip = (page - 1) * limit;
    const userData = await userModel.find().skip(skip).limit(limit);

    res.status(200).json({
      status: 'success',
      count: userData.length,
      userData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
};

async function getUserById(req, res, next) {
  try {
    const { userId } = req.params;
    const userData = await userModel.findOne({ _id: userId });

    res.status(200).json({
      status: 'success',
      userData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
}

async function updateUser(req, res) {
  try {
    const { userId } = req.params;
    const { body } = req;
    const response = await userModel.updateOne({ _id: userId }, { $set: body });
    res.status(200).json({
      status: 'success',
      response,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
}

async function deleteUser(req, res, next) {
  try {
    const { userId } = req.params;
    const response = await userModel.deleteOne({ _id: userId });
    res.status(200).json({
      status: 'success',
      response,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error,
    });
  }
}

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };
