const { Router } = require('express');
const { loginController } = require('../controller/loginController');
const router = Router();

router.get('/',loginController)

module.exports = router