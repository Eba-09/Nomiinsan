const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path: './config/config.env'});
const errorHandler = require('./middleware/error')
const connectDB = require("./config/db")
const authorRouter = require("./router/Author")
const duremRouter = require("./router/durem")
const sanchRouter = require("./router/nomSanch")
const userRouter = require("./router/user")
const cors = require('cors')
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use('/api/lib/author', authorRouter);
app.use('/api/lib/durem', duremRouter);
app.use('/api/lib/nomsanch', sanchRouter);
app.use('/api/lib/user', userRouter);
const server = app.listen(
    process.env.PORT,
    console.log(`express server ${process.env.PORT}`)
)
process.on('unhandledRejection', (err, promise)=>{
    console.log(`aldaa garla : ${err.message}`);
    server.close(()=>{process.exit(1)})
})