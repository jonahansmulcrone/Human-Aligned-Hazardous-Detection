require('dotenv').config();
const express = require('express');
const auth = require('./routes/auth');
const survey = require('./routes/survey');

const app = express();

app.use('/auth', auth);
app.use('/survey', survey)
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Welcome to the Human-Aligned Hazard Detection Survey');
});

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`express server listening on port ${PORT}`)
});
