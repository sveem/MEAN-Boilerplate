const router = require('express').Router();
const { getMockData, getFireBaseData } = require('./controller/index');
const asyncHandler = require('../../../utils/asyncHandler');

router.get('/firebase', asyncHandler(async (req, res) => {
  res.json(await getFireBaseData());
}));

/*
Uncomment to use FireBase
  router.get('/firebase', asyncHandler(async (req, res, next) => {
    res.json(await getMockData());
  }));
*/

module.exports = router;
