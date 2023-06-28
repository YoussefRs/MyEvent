const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


dotenv.config();


app.use(cookieParser());
app.use(cors());

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on : ${process.env.PORT}`)
})