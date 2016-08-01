//****************************************************************
//App that calls Published APIs from Catalog2 developers portal.
//Calling the GetTweetsByLocation API. gets one paramter - the location of the tweets we want to filter by
//****************************************************************

var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.eu.apiconnect.ibmcloud.com",
  "port": null,
  "path": "/eladorgbl1-eladspacebl1/catalog2/api/GetTweetsByLocation?location="+process.argv[2]+"",
  "headers": {
    "x-ibm-client-id": "468cb429-ec4f-4a42-9aa5-aaaf70f6baee",
    "x-ibm-client-secret": "xQ5lM2sC1sH2lU6hI7nB2mP6kH4wT5mI4bO8gQ6jI3vC0aU5bW",
    "content-type": "application/json",
    "accept": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();