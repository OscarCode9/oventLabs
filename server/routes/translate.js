var express = require('express');
var router = express.Router();
const translate = require('../controls/translate')
/* GET users listing. */
router.post('/transtalteService', translate);

module.exports = router;
