const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const errorHandler = require('./middleware/error')
const connectDB = require("./config/db")
dotenv.config({ path: './config/config.env'});
const cors = require('cors')
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
const server = app.listen(
    process.env.PORT,
    console.log(`express server ${process.env.PORT}`)
)
process.on('unhandledRejection', (err, promise)=>{
    console.log(`aldaa garla : ${err.message}`);
    server.close(()=>{process.exit(1)})
})