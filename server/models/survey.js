const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    state: String,
    city: String,
    licenseAge: String,
    age: Number,
    ethnicity: String,
    carMakeModel: String,
    gender: String,
    badDrivingRecord: String,
    speedingTickets: Boolean,
    atFault: Boolean,
    notAtFault: Boolean,
    dui: Boolean,
    visuallyImpaired: Boolean
});

module.exports = mongoose.model('Survey', surveySchema);