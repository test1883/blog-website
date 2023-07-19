require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")
const userRoutes = require("./routes/user")

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONG_URI)
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log("listenin and connecte")
  })
})
.catch((error) => {
  console.log("here")
  console.log(error)
})

