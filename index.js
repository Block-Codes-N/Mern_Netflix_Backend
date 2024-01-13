const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/Auth")


dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log('DB Connection established');
}
).catch((err) =>{console.error(err);});

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800, () => {
    console.log("Backend Server listening on");
});