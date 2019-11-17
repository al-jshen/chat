const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3400;

app.use(cors());
app.use(bodyParser.json());

const user_data = {
    'skooma': 'skooma',
}

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.post('/auth', (req, res) => {
    if (user_data[req.body.username] == req.body.password) {
        res.send(true);
    } else {
        res.send(false);
    }
})

app.listen(port)
