const express = require('express');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const startTime = Date.now();

// Read the template once on startup and cache it.
// This is more performant than reading the file from disk on every request.
let indexTemplate;
try {
    indexTemplate = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
} catch (err) {
    console.error('Failed to read index.html on startup:', err);
    process.exit(1); // Exit if the template can't be loaded
}

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();
    const dbEngine = process.env.DB_ENGINE || 'not set';

    // Replace placeholders in the cached template.
    // Using a global regex (/g) ensures all occurrences are replaced.
    const content = indexTemplate
        .replace(/{{DB_ENGINE}}/g, dbEngine)
        .replace(/{{CURRENT_TIME}}/g, currentTime);

    res.send(content);
});

app.get('/health', (req, res) => {
    const uptimeInSeconds = (Date.now() - startTime) / 1000;
    res.status(200).json({
        status: 'UP',
        uptime: `${uptimeInSeconds.toFixed(2)}s`,
        timestamp: new Date().toISOString()
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`);
});
