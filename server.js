// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

//json object javascript object notation (useful for transfering data between server and a web application)
let responseObject = {};
app.get("/api/timestamp/:input", (request, response) => {
  //sets up root so it returns an empty object , : collens treeted as a url prams
  let input = request.params.input;

  if (input.includes("-")) {
    // if a dash is involved, getTime() returns millieseconds from epoch and sets it to date then response object
    responseObject["unix"] = new Date(input).getTime()
    // toUTCString() calls on any valid date and converts to a UTC string
    responseObject['utc'] = new Date(input).toUTCString();
  } else {
    //no dash means TimeStamp
    //parseInt give string and converts to an interger
    input = parseInt(input)
    
    responseObject['unix'] = new Date()
  }

  
  response.json(responseObject);
});
