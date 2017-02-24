const User = require('./userModel');

const userController = {};

// userController.get = (req, res, next) => {

// }

userController.post = (req, res, next) => {
  const user = new User(req.body)

  user.save().then((newUser) => {
    res.status(201).json(newUser);
  }).catch((err) => {
    console.log('error');
    next(err);
  });
};

module.exports = userController;