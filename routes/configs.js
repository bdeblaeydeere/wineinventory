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
router.post('/notes', ctrl.configs.postNote);
router.delete('/notes', ctrl.configs.deleteNote);


module.exports = router;