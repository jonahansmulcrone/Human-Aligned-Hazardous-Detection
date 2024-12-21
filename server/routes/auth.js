const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
    const { email, password, surveyResponses } = req.body
});

module.exports = router;