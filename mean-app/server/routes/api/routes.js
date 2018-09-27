const router = require('express').Router();

router.use('/home', require('./home/routes'));
router.use('/menu', require('./menu/routes'));

module.exports = router;
