var express = require('express')

var router = express.Router()

var BookWormController = require('../../controllers/bookworm.controller.js');


router.get('/', BookWormController.getBookworms)

router.post('/', BookWormController.createBookworm)

router.put('/', BookWormController.updateBookworm)

router.delete('/:id',BookWormController.removeBookworm)


// Export the Router
module.exports = router;