const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.getAllLevels);
router.get('/niveis/:id', NivelController.getLevelById);
router.post('/niveis', NivelController.createLevel);
router.put('/niveis/:id', NivelController.updateLevel);
router.delete('/niveis/:id', NivelController.deleteLevel);

module.exports = router;