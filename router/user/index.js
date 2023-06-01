const router = require('express').Router();
const controllers = require('./lib/controller');

router.post('/register', controllers.register);

module.exports = router;
