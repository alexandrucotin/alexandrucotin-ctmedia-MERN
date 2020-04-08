const express = require('express');
const fileUpload = require ('express-fileupload');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
const port =  process.env.PORT || 5000;

// middlewares

app.use(cors());
app.use(express.json());

// db setup

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once ('open', () =>{
    console.log("MongoDB database connection established successfully");
})

// routes

const dashboardRouter = require('./routes/dashboard');
const portfolioRouter = require('./routes/portfolio');
const lavori = require('./routes/lavori');

app.use('/dashboard', dashboardRouter);
app.use('/portfolio', portfolioRouter);
app.use('/dashboard/lavori', lavori);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})