const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const { route } = require('./api');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));

router.use('/posts', require('./posts'));

router.use('/comments', require('./comments'))

router.use('/api', require('./api'));

router.use('/likes', require('./like'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile'));


module.exports = router;