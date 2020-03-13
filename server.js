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
let times;
let calData = {
    1584514800000: 0,
    1584518400000: 0,
    1584522000000: 0,
    1584525600000: 0,
    1584529200000: 0,
    1584532800000: 0,
    1584536400000: 0,
    1584540000000: 0,
    1584543600000: 0,
    1584547200000: 0,
    1584554400000: 0,	
    1584558000000: 0,	
    1584561600000: 0,	
    1584565200000: 0,	
    1584568800000: 0,	
    1584572400000: 0,
    1584576000000: 0,	
    1584579600000: 0,	
    1584583200000: 0,	
    1584586800000: 0,	
    1584590400000: 0,	
    1584594000000: 0,
    1584597600000: 0
    }




//   function takes in an array and returns array of availabilities for multiple instructors
function getAvailabilites(instructors) {
    // for loop to iterate through array of instructor ids
    for (let i = 0; i < list.length; i++) {
        instructorId = instructors[i].toString()
        // request to acuity API for the availabilites of an instructor for a particular date and appointment type
        acuity.request('/availability/times?date=' + date + '&appointmentTypeID=' + appointmentType + '&calendarID=' + instructorId, function (err, res, times) {
            if (err) return console.error(err);
            console.log(times)
            
        })
        times = times;
}
}
getAvailabilites(list);
console.log(times)

// moved out of request
// if (err) return console.error(err);         
//             for (let v=0;v <times.length; v++){
//                 unixTime = moment(times[v]["time"]).format("x").toString();
//                 // console.log("what I want to check:")
//                 console.log('result')
//                 console.log(calData[unixTime])
//                 // console.log(unixTime)
//                 if(calData[unixTime] != undefined){
//                     console.log("true")
//                     calData[unixTime] = calData[unixTime]+1;
//                 }else{
//                     console.log("false");
//                 }
            
//             };
//             console.log("data before return")
            
//             res.send(calData);
            

// end of moved out of request
// console.log(calData)


// convert acuity time to unixtime
    // unixTimestamp = moment(times[0]["time"]).format("x")
    //     console.log(unixTimestamp);

    // create object representing 24 hours/day and 12 hours/day pt with correct time format
    // iterate through each instructor calendar, convert time to correct format, update time object



