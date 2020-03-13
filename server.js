const Acuity = require('acuityscheduling');
const express = require('express');
const config = require('./config.json')
const moment = require('moment')

// create instance of acuity 
let acuity = Acuity.basic(config);

// create new express server
let app = express();

const PORT = 8000

// data for request url
let date = '2020-03-18';
let appointmentType = '3660432';
let instructorId;
let unixTime;
let list = [3580951, 3357862, 2367440];
let calData = {
    1584514800: 0,
    1584518400: 0,
    1584522000: 0,
    1584525600: 0,
    1584529200: 0,
    1584532800: 0,
    1584536400: 0,
    1584540000: 0,
    1584543600: 0,
    1584547200: 0,
    1584550800: 0,	
    1584554400: 0,	
    1584558000: 0,	
    1584561600: 0,	
    1584565200: 0,	
    1584568800: 0,	
    1584572400: 0,
    1584576000: 0,	
    1584579600: 0,	
    1584583200: 0,	
    1584586800: 0,	
    1584590400: 0,	
    1584594000: 0,
    1584597600: 0
    }




//   function takes in an array and returns array of availabilities for multiple instructors
function getAvailabilites(instructors) {
    // for loop to iterate through array of instructor ids
    for (let i = 0; i < list.length; i++) {
        instructorId = instructors[i].toString()
        // request to acuity API for the availabilites of an instructor for a particular date and appointment type
        acuity.request('/availability/times?date=' + date + '&appointmentTypeID=' + appointmentType + '&calendarID=' + instructorId, function (err, res, times) {
            if (err) return console.error(err);  
            // console.log(times[0]['time'].value)        
            for (let v=0;v <times.length; v++){
                unixTime = moment(times[v]["time"]).format("x")
                // console.log(unixTime)
                console.log(times[0])
                // console.log(calData)
                
            };
        });
    }
}
getAvailabilites(list);


// convert acuity time to unixtime
    // unixTimestamp = moment(times[0]["time"]).format("x")
    //     console.log(unixTimestamp);

    // create object representing 24 hours/day and 12 hours/day pt with correct time format
    // iterate through each instructor calendar, convert time to correct format, update time object



