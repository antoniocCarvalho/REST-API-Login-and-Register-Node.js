const express = require('express');
const router = express.Router();

const usuarioController = require('./controller/usuarioController');

//ve todos usuarios cadastrados
router.get('/usuarios', usuarioController.getALL);


//faz a validacao dos dados
router.post('/login',  usuarioController.validarUser);

//ver dados usuario logado
router.get('/usuario', usuarioController.getUser);


//cria um novo usuario
router.post('/createUser', usuarioController.createUser);


//deletar um usuario
router.delete('/usuario/:id',  usuarioController.deleteUser)




module.exports = router