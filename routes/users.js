var express = require('express')
const { body, validationResult, check, oneOf } = require('express-validator');
const { validarCampos} = require('../middlewares/validar-campos');
var user = require('../models/index')
const UsuarioController = require('../controllers/users')
const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validatiors')
const bcryptjs = require('bcryptjs')
const { validateCreateUser } = require('../middlewares/users.validate')


var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET')
});

router.post('/auth/register',validateCreateUser,UsuarioController.AddUsuario)




console.log()

module.exports = router

