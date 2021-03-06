const router = require('express').Router();
const { getMockData, getMongoData } = require('./controller/index');
const asyncHandler = require('../../../utils/asyncHandler');

router.get('/mongo', asyncHandler(async (req, res) => {
    res.json(await getMockData());
}));

/*
Uncomment to use MongoDB
  router.get('/mongo', asyncHandler(async (req, res) => {
    res.json(await getMongoData());
  }));
*/

module.exports = router;
