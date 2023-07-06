const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const userRouter = require("./routes/authRoutes")
const dashboardRouter = require("./routes/userDashboardRoutes");
const adminRouter = require("./routes/adminRoutes");
const eventRouter = require("./routes/eventRoutes");


dotenv.config();
console.log("in index - ", process.env.MONGO_ATLAS_URI);
//databse url

mongoose
    .connect(process.env.MONGO_ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database is running!')
    })
    .catch((err) => {
        console.log(err)
    })

require('./models/otpAuth');
require('./models/user');
require("./models/admin");
require("./models/event");

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/user", userRouter);
app.use("/user", dashboardRouter);

app.use("/", adminRouter);
app.use("/", eventRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on : ${process.env.PORT}`)
})