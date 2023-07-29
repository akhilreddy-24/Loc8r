var express = require('express');
var router = express.Router();
var ctrllocation = require('../controller/location');
var ctrlothers = require('../controller/others');

/*Location page*/

router.get('/',ctrllocation.homelist);
router.get('/location',ctrllocation.locationInfo);
router.get('/loction/review/new',ctrllocation.addReview);

/*other pages*/
router.get('/about',ctrlothers.about);

module.exports=router;