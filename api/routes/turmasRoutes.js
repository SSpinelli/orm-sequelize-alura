const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.getAllClasses);
router.get('/turmas/:id', TurmaController.getClassById);
router.post('/turmas', TurmaController.createClass);
router.put('/turmas/:id', TurmaController.updateClass);
router.delete('/turmas/:id', TurmaController.removeClass);

module.exports = router;