const router = require('express').Router();
const requestHandler = require('./request-handler.ts');

router.post('/clinique/create', requestHandler.createClinique());
router.post('/proprietaire/create', requestHandler.createProprietaire());
router.post('/personnel/create', requestHandler.createPersonnel());
router.post('/animal/create', requestHandler.createAnimal());

router.put('/animal/update/:id', requestHandler.updateAnimal());

router.delete('/clinique/delete/:id', requestHandler.deleteIndependentFrom('clinique', 'cliniqueno'));
router.delete('/personnel/delete/:id', requestHandler.deleteIndependentFrom('personnel', 'personnelno'));
router.delete('/animal/delete/:id/:cliniqueid', requestHandler.deleteDependentFrom('animal', 'animalno'));
router.delete('/proprietaire/delete/:id/:cliniqueid', requestHandler.deleteDependentFrom('proprietaire', 'propno'));

router.get('/clinique', requestHandler.getAll('clinique'));
router.get('/personnel', requestHandler.getAll('personnel'));
router.get('/proprietaire', requestHandler.getAll('proprietaire'));
router.get('/animal', requestHandler.getAll('animal'));

router.get('/animal/:id/:cliniqueid', requestHandler.getByAnimalNo('animal'));
router.get('/examen/:id/:cliniqueid', requestHandler.getByAnimalNo('examen'));

router.get('/traitement/:id', requestHandler.getTraitementByExamenNo());

router.get('/traitement/animal/:id', requestHandler.getTraitementByAnimalNo());
router.get('/clinique/proprietaire/:id', requestHandler.getPropByCliniqueNo());
router.get('/clinique/animal/:id', requestHandler.getAnimalByCliniqueNo());

router.get('/R1', requestHandler.R1());
router.get('/R2', requestHandler.R2());
router.get('/R3', requestHandler.R3());
router.get('/R4', requestHandler.R4());
router.get('/R5', requestHandler.R5());
router.get('/R6', requestHandler.R6());
router.get('/R7', requestHandler.R7());
router.get('/R8', requestHandler.R8());
router.get('/R9', requestHandler.R9());
router.get('/R10', requestHandler.R10());
router.get('/R11', requestHandler.R11());
router.get('/R12', requestHandler.R12());
router.get('/R13', requestHandler.R13());
router.get('/R15', requestHandler.R15());

module.exports = router;
