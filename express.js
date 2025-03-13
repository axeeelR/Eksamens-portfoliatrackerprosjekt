const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Velkommen til min enkle Express-server!');
});

// Sample endpoint for fetching data
app.get('/data', (req, res) => {
    res.json({ message: 'Dette er en JSON-respons', data: [1, 2, 3, 4, 5] });
});

// Sample endpoint for posting data
app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: 'Data mottatt', name, age });
});

// Start server
app.listen(port, () => {
    console.log(`Server kjører på http://localhost:${port}`);
});