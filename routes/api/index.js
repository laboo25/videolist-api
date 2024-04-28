const express = require('express');
const router = express.Router();

router.use('/videos', require('./videos'));
router.use('/channels', require('./channels'));
router.use('/performers', require('./performers'));
router.use('/btv', require('./btv'));
router.use('/super-star', require('./superStar'));

module.exports = router