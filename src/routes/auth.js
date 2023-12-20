const { Router } = require('express');
const {registerController} = require('../controller/registerController');
const { loginController } = require('../controller/loginController');

const router = Router();

router.post('/register',registerController);
router.post('/login',loginController);

module.exports = router