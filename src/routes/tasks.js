const { Router } = require('express');
const { tasksController } = require('../controller/tasksController');
const passport = require('passport');
const router = Router();
router.get('/',passport.authenticate("jwt",{session: false}),tasksController);
module.exports = router