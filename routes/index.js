const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.send('<h1>Welcome to My Node.js Web App!</h1><a href="/about">About</a> | <a href="/contact">Contact</a>');
});

// About route
router.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is a simple Node.js web application using Express.</p><a href="/">Home</a> | <a href="/contact">Contact</a>');
});

// Contact route
router.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1><p>You can reach us at: contact@example.com</p><a href="/">Home</a> | <a href="/about">About</a>');
});

// 404 Error Handling
router.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p><a href="/">Home</a>');
});

module.exports = router;