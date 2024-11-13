const Product = require('../models/Product');

const getAllProducts = async (req: any, res: any, next: any) => {
  let products = await Product.find({});
  console.log('All product fetched');
  res.send(products);
};

const addNewProduct = async (req: any, res: any, next: any) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let lastProductArray = products.slice(-1);
    let lastProduct = lastProductArray[0];
    id = lastProduct.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    productName: req.body.productName,
    image: req.body.image,
    productCategory: req.body.productCategory,
    salePrice: req.body.salePrice,
    price: req.body.price,
  });
  console.log(product);
  await product.save();
  console.log('Saved.');
  res.status(200).json({
    success: true,
    name: req.body.name,
  });
};

const removeProducts = async (req: any, res: any, next: any) => {
  const ids = req.body;
  console.log(ids);
  try {
    await Product.deleteMany({ id: { $in: ids } });
  } catch (error) {
    throw new Error('Cannot delete selected products');
  }
  console.log('Removed.');
  res.status(200).json({
    success: true,
    deleted: req.body,
  });
};

const updateProduct = (req: any, res: any, next: any) => {};

exports.getAllProducts = getAllProducts;
exports.addNewProduct = addNewProduct;
exports.removeProducts = removeProducts;
exports.updateProduct = updateProduct;
