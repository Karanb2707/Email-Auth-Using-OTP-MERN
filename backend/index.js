import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db/connectDB.js';
import router from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/auth', router);

app.use(express.json()); //allow us to parse incoming requests: req.body

app.listen(PORT , () => {
    connectDB();
    console.log('Server is running on port',PORT);
});

