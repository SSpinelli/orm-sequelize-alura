const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPeople);
router.get('/pessoas/:id', PessoaController.getPersonById);
router.post('/pessoas', PessoaController.createPerson);
router.put('/pessoas/:id', PessoaController.updatePerson);
router.delete('/pessoas/:id', PessoaController.deletePerson);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getRegistrationById);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createRegistration);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateRegistration);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteRegistration);



module.exports = router;