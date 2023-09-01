const express = require('express');
const port = process.env.port || 3003;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! Jenkins ');
});

app.listen(port, () => { console.log('My App Is Up And Running!'); });
module.exports = app