const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3400;
import { user_data } from './user_data';

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.post('/auth', (req, res) => {
    console.log(req.body.username, req.body.password)
    if (user_data[req.body.username] == req.body.password) {
        res.send(true);
    } else {
        res.send(false);
    }
})

app.listen(port)
