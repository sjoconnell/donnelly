const router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/nominations', require('./nomination/nominationRoutes'));
router.use('/awards', require('./award/awardRoutes'))

module.exports = router;