const { Router } = require('express');
const router = Router();
const authRouter = require('./auth')
const taskRouter = require('./tasks')
router.use(authRouter)
router.use(taskRouter)
module.exports = router