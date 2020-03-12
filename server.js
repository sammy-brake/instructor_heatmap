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
let calData = {};




//   function takes in an array and returns array of availabilities for multiple instructors
function getAvailabilites(instructors) {
    // for loop to iterate through array of instructor ids
    for (let i = 0; i < list.length; i++) {
        instructorId = instructors[i].toString()
        // request to acuity API for the availabilites of an instructor for a particular date and appointment type
        acuity.request('/availability/times?date=' + date + '&appointmentTypeID=' + appointmentType + '&calendarID=' + instructorId, function (err, res, times) {
            if (err) return console.error(err);
            // console.log("times run " +i)
            // console.log("key...")

            // console.log(times[0]['time'])            
            // console.log("value:")  
            // console.log(times[0]['time'].value)        
            for (let v=0;v <times.length; v++){
                unixTime = moment(times[v]["time"]).format("x")
                calData[unixTime] = 1;
                console.log(calData)
                
            };


        });
    }
    


}


console.log(getAvailabilites(list))
// convert acuity time to unixtime
    // unixTimestamp = moment(times[0]["time"]).format("x")
    //     console.log(unixTimestamp);

    // create object representing 24 hours/day and 12 hours/day pt with correct time format
    // iterate through each instructor calendar, convert time to correct format, update time object



