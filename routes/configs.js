const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.configs.countryIndex);

// router.get('/new', ctrl.wines.renderNew);
// router.get('/:index', ctrl.wines.show);
// router.post('/', ctrl.wines.postWine);
// router.delete('/:index', ctrl.wines.deleteWine);
// router.get('/:index/edit', ctrl.wines.renderEdit);
// router.put('/:index', ctrl.wines.editWine);

module.exports = router;