const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.wines.index);
router.get('/:index', ctrl.wines.show);

module.exports = router;