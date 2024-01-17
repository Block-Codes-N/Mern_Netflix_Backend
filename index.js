const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/Auth")
const userRoute = require("./routes/Users")
const movieRoute = require("./routes/Movies")



dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log('DB Connection established');
}
).catch((err) =>{console.error(err);});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);


app.listen(8800, () => {
    console.log("Backend Server listening on");
});