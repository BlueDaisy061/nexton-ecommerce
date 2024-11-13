const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const userSignUp = async (req: any, res: any, next: any) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: 'Existing user found with same email.' });
  }
  let cart = [];
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token });
};

const userLogin = async (req: any, res: any, next: any) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, 'secret_ecom');
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: 'Wrong password.' });
    }
  } else {
    res.json({ success: false, errors: 'Not registered email.' });
  }
};

exports.userSignUp = userSignUp;
exports.userLogin = userLogin;
