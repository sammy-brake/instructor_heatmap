const Acuity = require('acuityscheduling');
const express = require('express');
const config = require('./config.json')

// create instance of acuity 
let acuity = Acuity.basic(config);

// create new express server
let app = express();

const PORT = 8000

// data for request url
let date = '2020-03-18';
let appointmentType = '3660432';
let instructorId;
let instructors = [3580951,3357862,2367440];


//   function takes in an array and returns array of availabilities for multiple instructors
function getAvailabilites(instructors){
    // for loop to iterate through array of instructor ids
    for(let i = 0;i < instructors.length; i++){

        instructorId = instructors[i].toString()
        // request to acuity API for the availabilites of an instructor for a particular date and appointment type
    acuity.request('/availability/times?date=' + date + '&appointmentTypeID=' + appointmentType + '&calendarID=' + instructorId, function (err, res, times){
        if (err) return console.error(err);
        console.log(times);
    });
    }
}

getAvailabilites(instructors)
