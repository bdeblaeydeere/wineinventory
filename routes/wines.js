const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.wines.index);
router.get('/new', ctrl.wines.renderNew);
router.get('/:index', ctrl.wines.show);
router.post('/', ctrl.wines.postWine);
router.delete('/:index', ctrl.wines.deleteWine);

module.exports = router;