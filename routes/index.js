

const {Router} = require('express');
const tasks = require('./tasks');
const starwars = require('./starwars');

const router = Router();

router.use('/tasks', tasks);
router.use('/starwars',starwars)

module.exports = router;