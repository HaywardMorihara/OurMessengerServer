var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})






// var http = require('http');
//     http.createServer(function (req, res) {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('Hello World\n');
//     }).listen(1337, "127.0.0.1");
//     console.log('Server running at http://127.0.0.1:1337/');

// var request = require('request');

// // Set the headers
// var headers = {
//     'Authorization':       'key=AAAAxjb_95w:APA91bFchI4fz4dtsaD1AkJkRBRZhTTSu_8bGWABoVukdkS3iekmj3U97SkZHTAvijNKFwZCY7jXAbAn7P3xMiIJDWeGHWJ9UU-NQnKg-Mxz9_bbDhhkvgTknAGGXowDxg1d2EjnG6Ap',
//     'Content-Type':     'application/json'
// }

// // Configure the request
// var options = {
//     url: 'https://fcm.googleapis.com/fcm/send',
//     method: 'POST',
//     headers: headers,
//     form: { "notification": {
//     "title": "Portugal vs. Denmark",
//     "body": "5 to 1"
//   },
//   "to" : "cuObDCrFAHY:APA91bHnKE3rpSxGvla9aPza_OtfJ8GMYJDJ4Z13jI-u_FnSUnvnACMIGsejOWlTP3Hq66D-COXzgYS6JVMgdTELD25Tgc6_szbDiYPfnxsNOwpiFwujKXiFmqa3aa8jZSp8d3sVSnpm"
// }
// }

// // Start the request
// request(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         // Print out the response body
//         console.log(body)
//     }
// })
