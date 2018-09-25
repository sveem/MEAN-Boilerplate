const router = require('express').Router();
const { getMockDAOData } = require('./controller/index');
const asyncHandler = require('../../../utils/asyncHandler');

router.get('/firebase',  asyncHandler(async (req, res, next) => {
  res.json(await getMockDAOData());
}));

module.exports = router;
