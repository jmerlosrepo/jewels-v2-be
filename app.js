const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const fs = require('fs');

app.get('/getjewels', (req, res) => {
    fs.readFile('data/data.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    })
});
;app.get('/test', (req, res) => {
    res.send('HOLA');
})

app.listen(PORT, () => {
    console.log('Listening port: ', PORT);
})