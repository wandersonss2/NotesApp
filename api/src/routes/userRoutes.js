const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/register', userController.createUser);
router.get('/userget', userController.getAllUsers);
router.get('/userid/:id', userController.getUserById); // Atualizar para aceitar ID como parâmetro
router.put('/userupdt/:id', userController.updateUser); // Atualizar para aceitar ID como parâmetro
router.delete('/userdelet/:id', userController.deleteUser); // Atualizar para aceitar ID como parâmetro
router.post('/login', userController.loginUser); // Rota de login

module.exports = router;
