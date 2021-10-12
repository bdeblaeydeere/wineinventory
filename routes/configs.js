const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.configs.countryIndex);
router.post('/countries', ctrl.configs.postCountry);
router.delete('/countries', ctrl.configs.deleteCountry);
router.post('/producers', ctrl.configs.postProducer);
router.delete('/producers', ctrl.configs.deleteProducer);
router.post('/sellers', ctrl.configs.postSeller);
router.delete('/sellers', ctrl.configs.deleteSeller);
// router.post('/', ctrl.configs.postNotes);
// router.delete('/notes', ctrl.configs.deleteNotes);



// router.get('/new', ctrl.wines.renderNew);
// router.get('/:index', ctrl.wines.show);
// router.get('/:index/edit', ctrl.wines.renderEdit);
// router.put('/:index', ctrl.wines.editWine);

module.exports = router;