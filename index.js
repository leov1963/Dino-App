require('dotenv').config();

const express = require('express');
const axios = require('axios');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const db = require("./models")

const dinos = require("../models/dinos")

const app = express();
app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    db.dinos.findAll()
    .then( allDinos => {
        res.render('index', { allDinos }); 
    })
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});