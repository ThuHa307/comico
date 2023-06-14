import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

import authRoute from './routes/auth.js';
import authorRoute from './routes/author.js';
import bookRoute from './routes/book.js';
import interact from './routes/interact.js';
import { Book } from './model/model.js';
import { paginatedResults } from './utils/pagination.js';

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

// Sử dụng cookie-parser để đọc cookie dễ dàng hơn thông qua req.cookies
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use('/auth', authRoute);
app.use('/api/author', authorRoute);
app.use('/api/book', bookRoute);
app.use('/api/interact', interact);

app.get('/book', paginatedResults(Book), (req, res) => {
    res.json(res.paginatedResults);
});

app.listen(PORT, () => console.log(`Server is running at: http://localhost:${PORT}`));
