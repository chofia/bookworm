var express = require('express')

var router = express.Router()
var bookworms = require('./api/bookworm.route')


router.use('/bookworm', bookworms);


module.exports = router;
