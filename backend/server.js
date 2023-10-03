const express = require("express")
const server = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/db")
const {errorHandler} = require('./middleware/errorHandler')
const port = process.env.PORT

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

connectDB()

server.listen(port,() => console.log(`Server is listening on port ${port}`))

const goalRoutes = require('./routes/goalRoute');
const userRoutes = require('./routes/userRoute');
const workoutRoutes = require('./routes/workoutRoute')

server.use('/api/goal',goalRoutes);
server.use('/api/user',userRoutes)
server.use('/api/workouts', workoutRoutes)
server.use(errorHandler);
console.log("print modified in main")
