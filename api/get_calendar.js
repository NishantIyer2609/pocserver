const fs = require('fs');
const path = require('path');

function transformAppointmentData(appointment) {
    return {
        [appointment["Appointment ID"]]: {
            "line 1": appointment["Patient Name"],
            "line 2": appointment["Doctor"],
            "line 3": appointment["Purpose"]
        }
    };
}

module.exports = function getCalendar() {
    const appointmentsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/appointments.json'), 'utf8'));
    return appointmentsData.map(transformAppointmentData);
};