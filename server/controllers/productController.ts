const Product = require('../models/Product');

const getAllProducts = async (req: any, res: any, next: any) => {
  let products = await Product.find({});
  console.log('All product fetched');
  res.send(products);
};

const getProductById = async (req: any, res: any, next: any) => {
  const productId = req.params.pid;
  let product = await Product.findById(productId);

  const { productName, image, productCategory, salePrice, price } = product;

  if (product) {
    res.send({
      productName,
      image,
      productCategory,
      salePrice,
      price,
      isDiscount: !!product.salePrice,
    });
  } else {
    res.status(404).json({
      success: false,
      error: '404 - Product not found',
    });
  }
};

const getProductDetailById = async (req: any, res: any, next: any) => {
  let productId = req.params.pid;
  let productDetail = await Product.findById(productId);

  const {
    availableSizes,
    tax,
    productOverview,
    material,
    color,
    salesCount,
    keywords,
    date,
    available,
  } = productDetail;

  if (productDetail) {
    res.send({
      availableSizes,
      tax,
      productOverview,
      material,
      color,
      salesCount,
      keywords,
      date,
      available,
    });
  } else {
    res.status(404).json({
      success: false,
      error: '404 - Product not found',
    });
  }
};

const addNewProduct = async (req: any, res: any, next: any) => {
  const product = new Product({
    productName: req.body.productName,
    image: req.body.image,
    productCategory: req.body.productCategory,
    salePrice: req.body.salePrice,
    price: req.body.price,
    isDiscount: !!req.body.salePrice,
    availableSizes: req.body.availableSizes,
    tax: req.body.tax,
    productOverview: req.body.productOverview,
    material: req.body.material,
    color: req.body.color,
    keywords: req.body.keywords,
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
exports.getProductById = getProductById;
exports.getProductDetailById = getProductDetailById;
