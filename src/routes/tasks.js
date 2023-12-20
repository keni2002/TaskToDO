const { Router } = require('express');
const { getTasksController, addTasksController } = require('../controller/tasksController');
const passport = require('passport');
const router = Router();
router.get('/',passport.authenticate("jwt",{session: false}),getTasksController);
router.post('/add',passport.authenticate('jwt', {session: false}), addTasksController)
module.exports = router