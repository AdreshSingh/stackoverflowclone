import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRoutes from './routes/users';

const PORT = 3000;
const app = express();
const DB_URL = "mongodb+srv://admin:admin1234@cluster0.b390x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json({ limit: "300mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors({ origin: '*' }))

//? user auth
app.use("/user", userRoutes);




app.get('/', (req, res) => {
    res.send("Welcome to Backend")
})

mongoose.connect(DB_URL)
    .then(() => (app.listen(PORT, () => {
        console.log(`BACKEND RUNNING ON ${PORT}`)
    })))
    .catch((err) => (console.log(err.message)))

