const productModel = require('../model/product.model');

async function allProducts(req, res) {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const skip = (page - 1) * limit;

    const productData = await productModel.find().skip(skip).limit(limit);
    const totalCount = await productModel.count();
    res.json({
      status: 'succees',
      dataCount: productData.length,
      totalCount,
      data: productData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'something went wrong',
      error,
    });
  }
}

async function getProduct(req, res) {
  try {
    const productData = await productModel.findOne({ _id: req.params.id });

    res.status(200).json({
      status: 'success',
      message: 'data uploaded',
      data: productData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'data uploading failed',
      error,
    });
  }
}

async function uploadProducts(req, res) {
  try {
    const productData = await productModel.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'data uploaded',
      data: productData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'data uploading failed',
      error,
    });
  }
}

async function updateProducts(req, res) {
  try {
    const productData = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json({
      status: 'success',
      message: 'data updated',
      data: productData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'product updating failed',
      error,
    });
  }
}

async function deleteProduct(req, res) {
  try {
    await productModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'product id is not correct',
      error,
    });
  }
}

module.exports = {
  allProducts,
  uploadProducts,
  updateProducts,
  deleteProduct,
  getProduct,
};
