/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: John Niagwan Student ID: 121092225 Date: 17/01/2024
*
********************************************************************************/ 

//Declaration of Arrays
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = ["200:Welcome to WEB700 Assignment 1", "200:This assignment was prepared by John Niagwan", "200:John Niagwan: jniagwan@myseneca.ca", "200:User Logged In", "200:Main Panel", "200:Logout Complete"];

//getRandomInt function to generate random index numbers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//httpRequest function takes two parameters, compares parameters with values stored in array index and gives a 200 response if matching pair is correct or 404 if wrong
function httpRequest(httpVerb, path) {
    for(var i = 0; i < serverPaths.length; i++) {
        if(serverVerbs[i] == httpVerb && serverPaths[i] == path){
            return serverResponses[i];
        }
        
    }
    return `404:Unable to process ${httpVerb} request for ${path}`
}

//automateTests function to use random request to generate random httpVerb and path pairs and test using httpRequest function.
function automateTests() {
    testVerbs = ["GET", "POST"]
    testPaths =	["/", "/about",	"/contact",	"/login", "/panel",	"/logout", "/randomPath1", "/randomPath2"]

    function randomRequest() {
        randVerb = testVerbs[getRandomInt(2)]
        randPath = testPaths[getRandomInt(8)]
        console.log(`Request:${randVerb} ${randPath}: ${httpRequest(randVerb, randPath)}`)
    }
    setInterval(randomRequest, 1000)
    
}

//Invoke automateTests function
automateTests()
