const fs = require('fs');

class Data{
    constructor(students, courses){
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

 module.exports.initialize = function() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/students.json', 'utf8', function(err, dataFromStudents){
            if (err){
                reject(`Unable to read students.json`);
                return;
            }

            let studentData = JSON.parse(dataFromStudents);

            fs.readFile('./data/courses.json', 'utf8', function(err, dataFromCourses){
                if (err){
                    reject(`Unable to read courses.json`);
                    return;
                }

                let courseData  = JSON.parse(dataFromCourses);
                dataCollection = new Data(studentData, courseData);

                // If the operation is successful, call resolve with the result
                resolve('Operation successful');
            });
        });
    });
}

module.exports.getAllStudents = function() {
    return new Promise((resolve, reject) => {
        // Check students array is empty
        if (dataCollection.students.length > 0) {
            // If there are students, resolve with the array
            resolve(dataCollection.students);
        } else {
            // If no students or an empty array, reject with a meaningful message
            reject("No results returned for getAllStudents");
        }
    });
}

module.exports.getTAs = function() {
    return new Promise((resolve, reject) => {
        // Check if students array is empty
        if (dataCollection.students.length > 0) {
            // Filter students with TA property set to true
            const tas = dataCollection.students.filter(student => student.TA === true);

            if (tas.length > 0) {
                // If there are TAs, resolve with the array
                resolve(tas);
            } else {
                // If no TAs found, reject with a meaningful message
                reject("No TAs found");
            }
        } else {
            // If no students or an empty array, reject with a meaningful message
            reject("No results returned for getTAs");
        }
    });
}

module.exports.getCourses = function() {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length > 0) {
            resolve(dataCollection.courses)
        } else {
            reject('No results returned')
        }
    })
}