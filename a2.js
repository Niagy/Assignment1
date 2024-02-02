/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: John Niagwan Student ID: 121092225 Date: 02/02/2024
*
********************************************************************************/ 


var collegeData = require('./modules/collegeData.js')

collegeData.initialize()
    .then(successMessage => {
        console.log(successMessage);

        // Test getAllStudents function
        collegeData.getAllStudents()
            .then(students => {
                console.log(`Successfully retrieved ${students.length} students`);
            })
            .catch(error => {
                console.error(error);
            });

        // Test getCourses function
        collegeData.getCourses()
            .then(courses => {
                console.log(`Successfully retrieved ${courses.length} courses`);
            })
            .catch(error => {
                console.error(error);
            });

        // Test getTAs function
        collegeData.getTAs()
            .then(tas => {
                console.log(`Successfully retrieved ${tas.length} TAs`);
            })
            .catch(error => {
                console.error(error);
            });

    })
    .catch(error => {
        console.error(error);
    });