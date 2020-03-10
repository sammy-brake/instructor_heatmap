const Acuity = require('acuityscheduling');
const express = require('express');
const config = require('./config.json')

// create instance of acuity 
let acuity = Acuity.basic(config);

// create new express server
let app = express();

const PORT = 8000


// test connection (do not run this...incredibly long output)
// acuity.request('appointments', function (err, res, appointments) {
//     if (err) return console.error(err);
//     console.log(appointments);
//   });

acuity.request('appointment-types', function(err, res, appointments){
    if (err) return console.error(err);
    console.log(appointments)
})