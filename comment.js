// Create web server
// 1. Import module
const express = require('express');
const app = express();
const port = 3000;

// 2. Set route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});