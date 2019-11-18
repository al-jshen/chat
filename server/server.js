const user_data = require('./user_data');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3400;

app.use(cors());
app.use(bodyParser.json());
const authdat = user_data.authdat;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.post('/auth', (req, res) => {
    console.log(req.body.username, req.body.password, authdat[req.body.username])
    if (authdat[req.body.username] == req.body.password) {
        res.send(true);
    } else {
        res.send(false);
    }
})

app.listen(port, () => {
    console.log(`Node server listening on port ${port}...`)
})
