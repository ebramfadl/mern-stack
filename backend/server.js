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
const userRoutes = require('./routes/userRoute')
server.use('/api/goal',goalRoutes);
server.use('/api/user',userRoutes)
server.use(errorHandler);
