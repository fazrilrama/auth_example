const express = require('express');
const router = express.Router();
const authRouter = require('../method/authentication/auth.route');

router.use('/auth', authRouter);

module.exports = router;