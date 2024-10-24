const express = require('express');
const ControllerExercicio = require('../controllers/exercicio')

const router = express.Router()

router.post("/exercicio3/", ControllerExercicio.calcularMediaPeso)
router.post("/exercicio9/", ControllerExercicio.calcularMedia)
router.post("/exercicio17/", ControllerExercicio.calcularMediaPonderada)
router.post("/exercicio24/", ControllerExercicio.imprimirTabuada)
router.post("/exercicio16/", ControllerExercicio.calcularImpostoRenda)

module.exports = router;