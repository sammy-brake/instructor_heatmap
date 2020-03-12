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


// request for all appointment types
// acuity.request('appointment-types', function(err, res, appointments){
//     if (err) return console.error(err);
//     console.log(appointments)
// })

// availability/times?appointmentTypeID=123&calendarID=123&date=2016-02-04"


let date = '2020-03-18';
let appointmentType = '3660432';
let calendarId = '3580951';
let calendarId2 = '3357862';
let instructorId;
// + '&addOnID=' + calendarId2
instructors = [3580951,3357862,2367440]


    
function getAvailabilites(instructors){
    for(let i = 0;i < instructors.length; i++){
     
        instructorId = instructors[i].toString()
        console.log(i)
        console.log("Instructor iD is......")
        console.log(instructorId);

    acuity.request('/availability/times?date=' + date + '&appointmentTypeID=' + appointmentType + '&calendarID=' + instructorId, function (err, res, times){
        if (err) return console.error(err);
        console.log(times);
       
    });
    }
}
    
    
getAvailabilites(instructors)




    // acuity.request('/availability/times?date=' + date + '&appointmentTypeID=' + appointmentType + '&calendarID=' + calendarId, function (err, res, times){
    //     if (err) return console.error(err);
    //     console.log(times);
    //     // console.log(res)
    // });

