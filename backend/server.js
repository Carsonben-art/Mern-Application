require('dotenv').config();
const express = require("express")
const workoutRoutes = require('./routes/workouts')
// express app
const app = express();


// middleware
app.use(express.json())

app.use((req,res, next) =>{
    console.log(req.path, res.method)
    next()
})

// app.get('/',(req,res) => {
//     res.json({message: 'Welcome to My App'})
// })
app.use('/api/workouts',workoutRoutes)
// listen for requests.
app.listen(process.env.PORT, () => {
    console.log("Listening on Port ", process.env.PORT)
})