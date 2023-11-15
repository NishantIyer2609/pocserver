const fs = require('fs');
const path = require('path');

function getInvitedPatients() {
    // Read the patients.json file
    const patientsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/patients.json'), 'utf8'));
    let formattedData = [];

    // Loop through each patient and format the required data
    patientsData.forEach((patient, index) => {
        let patientEntry = {
            [`IP${index + 1}`]: {
                "line 1": patient.Name,
                "line 2": patient.Mobile,
            }
        };
        formattedData.push(patientEntry);
    });

    // Return the formatted data
    return formattedData;
}

module.exports = getInvitedPatients;
