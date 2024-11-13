const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

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
  filename: (req: any, file: any, cb: any) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

app.get('/', (req: any, res: any) => {
  res.send('App is running');
});

app.post('/upload', upload.single('product'), (req: any, res: any) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.use('/product', productRoutes);

app.use('/user', userRoutes);

app.listen(port, (error: Error) => {
  if (!error) {
    console.log('Server is running on port', port);
  } else {
    console.log('Error: ', error);
  }
});
