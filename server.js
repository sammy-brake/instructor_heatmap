
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
                    //  iterate through times to update object for each instructor
                for (let v=0;v <times.length; v++){
                    // convert returned time to unix time needed by the calendar api I'm using
                    unixTime = moment(times[v]["time"]).format("x").toString();
                    // check to see if key exists and, if it does, update
                    if(calData[unixTime] != undefined){
                        console.log("true")
                        calData[unixTime] = calData[unixTime]+1;
                    }else{
                        console.log("false");
                    }
                   
                };
                console.log("here is final data")
                console.log(calData)
                return calData;
                // end request
            });
            // console.log("this returns object not updated")
            // console.log(calData)
           
        }
    }
    getAvailabilites(list);
    // this retuns unupdated object
    console.log(calData)






