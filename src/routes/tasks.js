const { Router } = require('express');
const { getTasksController, addTasksController, getOneController, deleteTaskController, updateTaskController } = require('../controller/tasksController');
const passport = require('passport');
const router = Router();
router.get('/',passport.authenticate("jwt",{session: false}),getTasksController);
router.get('/:id', passport.authenticate('jwt', {session:false}),getOneController);
router.post('/add',passport.authenticate('jwt', {session: false}), addTasksController)
router.delete('/destroy/:id', passport.authenticate('jwt', {session:false}),deleteTaskController)
router.put('/put/:id',passport.authenticate('jwt', {session:false}),updateTaskController)
module.exports = router