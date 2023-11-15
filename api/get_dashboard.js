const fs = require('fs');
const path = require('path');

module.exports = function getDashboard() {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../data/dashboard.json'), 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading dashboard data:', err);
        return [];
    }
};
