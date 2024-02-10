const express = require('express');
const { validateUserRegistration, validateLogin } = require('../validators/userValidator');
const validateRequest = require('../middlewares/validateRequest');
const { register, login } = require('../controllers/authenticationController');

const router = express.Router();

router.post('/register', validateUserRegistration, validateRequest, register);
router.post('/login', validateLogin, validateRequest, login);

module.exports = router;