const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { initDatabase } = require('./repositories')
const API = require('./api');
let colors = require('colors');


const app = express();
const PORT = process.env.PORT || 8080;
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
