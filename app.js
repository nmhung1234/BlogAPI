const express = require('express');
let colors = require('colors');
const cors = require('cors');
const API = require('./api');
const { initDatabase } = require('./repositories')

const app = express();

const PORT = 8080;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    console.log("Method:",req.method, "|", req.params, "|", req.query, "|", req.body);
    next();
}, API);
initDatabase();

app.listen(PORT, (err) => {
    if (!err) {
        console.log("listening on port".blue, PORT);
    }
});
