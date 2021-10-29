const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Server Running in localhost')
});

app.listen(port, () => {
    console.log('Server Running.....')
})