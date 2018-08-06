const express = require('express');

const router = express.Router();

const gradientController = require('../controllers/gradientController');

// index
router.get('/', gradientController.index);

router.get('/test', gradientController.test);
// show
router.get('/:id', gradientController.show);
// create
router.post('/', gradientController.create);
// update
router.post('/:id', gradientController.update);
// delete
router.post('/:id/delete', gradientController.delete);

module.exports = router;
