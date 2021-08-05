const express = require('express');
let colors = require('colors');
const cors = require('cors');
const API = require('./api');
const { initDatabase } = require('./repository')


const app = express();

const PORT = 8080;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(API);
initDatabase();

app.listen(PORT, (err) => {
    if (!err) {
        console.log("listening on port".blue, PORT);
    }
});