const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static('upload/images'));

mongoose.connect(
  'mongodb+srv://daisynguyen0601:nextonweb@cluster0.jrhqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const Product = mongoose.model('Product', {
  id: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  salePrice: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// App endpoints

app.get('/', (req, res) => {
  res.send('App is running');
});

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.post('/add-product', async (req, res) => {
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
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.delete('/remove-products', async (req, res) => {
  const ids = req.body;
  console.log(ids);
  try {
    await Product.deleteMany({ id: { $in: ids } });
  } catch (error) {
    throw new Error('Cannot delete selected products');
  }
  console.log('Removed.');
  res.json({
    success: true,
    deleted: req.body,
  });
});

app.get('/all-products', async (req, res) => {
  let products = await Product.find({});
  console.log('All product fetched');
  res.send(products);
});

app.listen(port, (error) => {
  if (!error) {
    console.log('Server is running on port', port);
  } else {
    console.log('Error: ', error);
  }
});
