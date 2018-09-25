const router = require('express').Router();
const { getMockDAOData } = require('./controller/index');
const asyncHandler = require('../../../utils/asyncHandler');

router.get('/mongo',  asyncHandler(async (req, res) => {
  res.json(await getMockDAOData());
}));

module.exports = router;
