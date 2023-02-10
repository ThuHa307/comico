import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoute from './routes/auth.js';
import authorRoute from './routes/author.js';
import bookRoute from './routes/book.js';

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to mongodb server!');
});

const PORT = 8000;

const corsOptions = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan('common'));
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use('/auth', authRoute);
app.use('/api/author', authorRoute);
app.use('/api/book', bookRoute);

app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`));
