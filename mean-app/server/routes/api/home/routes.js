const router = require('express').Router();
const { getMockData, getFireBaseData } = require('./controller/index');
const asyncHandler = require('../../../utils/asyncHandler');

router.get('/firebase', asyncHandler(async (req, res) => {
  res.json(await getMockData());
}));

/*
Uncomment to use FireBase
  router.get('/firebase', asyncHandler(async (req, res) => {
    res.json(await getFireBaseData());
  }));
*/

module.exports = router;
