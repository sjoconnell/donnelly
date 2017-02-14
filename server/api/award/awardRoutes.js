const router = require('express').Router();

router.get('/', (req, res, next) => {
  console.log('route file hit');
  res.send('for real it hit');
});

module.exports = router;