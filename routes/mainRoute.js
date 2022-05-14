const express = require('express');
const router = express.Router()

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const mainController = require("../controllers/mainController")


// CONFIFURACION DE RUTAS Y METODOS

router.get('/', mainController.index)

module.exports = router;