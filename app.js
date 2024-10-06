const express = require('express');
const app = express();
const port = 3000;

// Import routes
const routes = require('./routes/index');

// Middleware to serve static files
app.use(express.static('public'));

// Use the routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});