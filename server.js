const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Import API functions
const getDashboard = require('./api/get_dashboard');
const getCalendar = require('./api/get_calendar');
const getInvPatients = require('./api/get_invpatients');
const getAllPatients = require('./api/get_allpatients');
const getOnePatient = require('./api/get_onepatient');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Event Handler Table (EHT)
const EHT = {
  'a': getDashboard,
  'd': getCalendar,
  '9c': getInvPatients,
  'e': getAllPatients 
};

app.post('/event', (req, res) => {
  const eid = req.body.eid;

  if (EHT[eid]) {
    const data = EHT[eid](req.body); // Pass request body if needed
    res.json(data);
  } else {
    res.status(404).send('Event ID not found');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

