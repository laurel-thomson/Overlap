var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyCWC-hawqPxalkgb1MFye2Z6_3NFbO_gXU",
  authDomain: "overlap-cae10.firebaseapp.com",
  databaseURL: "https://overlap-cae10.firebaseio.com",
  projectId: "overlap-cae10",
  storageBucket: "overlap-cae10.appspot.com",
  messagingSenderId: "625223917957",
  appId: "1:625223917957:web:641fbb30055ce17349e4ec",
  measurementId: "G-8YS7YHQW9K"
};
firebase.initializeApp(config);

//get a schedule
app.get('/:accessCode', function (req, res) {
	var scheduleRef = firebase.database().ref(`/schedules/${req.params.accessCode}`);

	scheduleRef.on("value",
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					},
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});

//Create a schedule
app.post('/', function (req, res) {
  const scheduleName = req.body.scheduleName;
  const accessCode = req.body.accessCode;
  const days = req.body.days;

  const scheduleReference = firebase.database().ref(`/schedules/${accessCode}`);
  scheduleReference.set({name : scheduleName, days: days}, function(error) {
    if (error) {
      res.error("Data could not be saved");
    } else {
      res.send("Data saved successfully.");
    }
  });
});

//Add a user
app.put('/:accessCode/addUser', function (req, res) {
	var user = req.body.user;

	var referencePath = `/schedules/${req.params.accessCode}/users`;
	var userReference = firebase.database().ref(referencePath).push();
	userReference.set({name: user},
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					}
					else {
						res.send("Data saved successfully.");
					}
			});
});

var server = app.listen(8080, function () {

   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
});
