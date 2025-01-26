import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db/connectDB.js';
import router from './routes/auth.route.js';


dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/api/auth', router);

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});

