import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoute from './routes/auth.js';
import authorRoute from './routes/author.js';
import bookRoute from './routes/book.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to mongodb server!');
});

const app = express();
const PORT = 8000;

app.use(cors());
app.use(morgan('common'));
app.use(bodyParser.json());

//ROUTES
app.use('/auth', authRoute);
app.use('/api/author', authorRoute);
app.use('/api/book', bookRoute);

app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`));
