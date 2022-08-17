const adherentController = require('../controllers/adherentController.js');

const router = require('express').Router();

router.post('/add', adherentController.addAdherent)

router.get('/all', adherentController.getAllAdherents)

router.get('/published', adherentController.publishedAdherent)



router.get('/:id', adherentController.getOneAdherent)

router.put('/:id', adherentController.updateAdherent)

router.delete('/:id', adherentController.deleteAdherent)

module.exports = router