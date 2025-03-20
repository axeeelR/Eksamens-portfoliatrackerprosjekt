const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let db = [];

// Middleware for parsing JSON
app.use(express.json());

// Root endpoint
app.get('/test', (req, res) => {
    console.log(req);
    res.status(200).json({test: true});
});

app.get('/', (req, res) => {
    res.render("index", {db});
}
);

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