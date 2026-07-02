import express from "express";
import 'dotenv/config'
import connectDB from "./database/db.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from 'cookie-parser'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port:${PORT}`);
});