const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",  "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const firebase = require('firebase');
const config = {
  apiKey: 'AIzaSyCWC-hawqPxalkgb1MFye2Z6_3NFbO_gXU',
  authDomain: 'overlap-cae10.firebaseapp.com',
  databaseURL: 'https://overlap-cae10.firebaseio.com',
  projectId: 'overlap-cae10',
  storageBucket: 'overlap-cae10.appspot.com',
  messagingSenderId: '625223917957',
  appId: '1:625223917957:web:641fbb30055ce17349e4ec',
  measurementId: 'G-8YS7YHQW9K'
};
firebase.initializeApp(config);

//get all users
app.get('/:accessCode/users', function(req, res) {
  const usersRef = firebase.database().ref(`/schedules/${req.params.accessCode}/users`);
  usersRef.once('value')
    .then(
      (result) => res.json(result.val()),
      (error) => res.send(`The read failed: ${error.code}`)
    );
});

//get a schedule
app.get('/:accessCode', function (req, res) {
	const scheduleRef = firebase.database().ref(`/schedules/${req.params.accessCode}`);

	scheduleRef.once('value')
    .then(
      (result) => res.json(result.val()),
      (error) => res.send(`The read failed: ${error.code}`)
    );
});

//Create a schedule
app.post('/', function (req, res) {
  const scheduleName = req.body.scheduleName;
  const accessCode = req.body.accessCode;
  const schedule = req.body.schedule;
  const scheduleReference = firebase.database().ref(`/schedules/${accessCode}`);
  scheduleReference.set({name : scheduleName, days: schedule})
    .then(
      (result) => res.send('Data saved successfully.'),
      (error) => res.error('Data could not be saved')
    );
});

//Add a user
app.put('/:accessCode/addUser', function (req, res) {
  console.log(req);
	const user = req.body.user;
	const referencePath = `/schedules/${req.params.accessCode}/users`;
	const userReference = firebase.database().ref(referencePath).push();
	userReference.set({name: user})
    .then(
      (result) => res.send('Data saved successfully.'),
      (error) => res.send('Data could not be saved.' + error)
    );
});

//Update a schedule preference
app.put('/:accessCode/updateSchedule', function(req, res) {
  const dayIndex = req.body.dayIndex;
  const timeIndex = req.body.timeIndex;
  const user = req.body.user;
  const isAvailable = req.body.isAvailable;
  const path = `/schedules/${req.params.accessCode}/days/${dayIndex}/timeslots/${timeIndex}/users/`;

  if (isAvailable) {
    firebase.database().ref(path).update({ [user] : true })
      .then(
        (result) => res.send('Data saved successfully.'),
        (error) => res.send('Data could not be saved.' + error)
      );
  } else {
    firebase.database().ref(path + user).remove()
      .then(
        (result) => res.send('Data saved successfully.'),
        (error) => res.send('Data could not be saved.' + error),
      );
  }
});


var server = app.listen(8080, function () {
   const host = server.address().address;
   const port = process.env.PORT || 8080;
   console.log('Example app listening at http://%s:%s', host, port);
});
