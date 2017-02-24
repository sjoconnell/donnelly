const router = require('express').Router();
var userController = require('./userController');
var _ = require('lodash');

router.post('/', userController.post);

// router.get('/', (req, res, next) => {
//   User.find({})
//     .then((user) => res.json(user))
// });

module.exports = router;