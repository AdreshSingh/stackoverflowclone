import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import userRoutes from './routes/users.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(express.json({ limit: "300mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

//? user auth
app.use("/user", userRoutes);




app.get('/', (req, res) => {
    res.send("Welcome to Backend")
})

mongoose.connect(DB_URL, {
    serverSelectionTimeoutMS: 5000 // Adjust timeout
})
    .then(
        () => (app.listen(PORT, () => {
            console.log(`BACKEND RUNNING ON ${PORT}`)
        }))
    )
    .catch((err) => (console.log(err.message)))

