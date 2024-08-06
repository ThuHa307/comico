import mongoose, { Schema } from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
        },
    ],
});

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    genres: {
        type: [String],
    },
    latestChapter: {
        type: Number,
        default: 0,
    },
    votes: {
        type: Number,
    },
    view: {
        type: Number,
    },
    isFull: false,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    },
    image: {
        type: String,
    },
});

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const interactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    book: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
        },
    ],
    type: {
        type: String,
        enum: ['follow', 'favorite'],
        required: true,
    },
});

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genreCode: {
        type: String,
        unique: true,
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
        },
    ],
    total: {
        type: Number,
    },
});

const chapterSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

let Book = mongoose.model('Book', bookSchema);
let Author = mongoose.model('Author', authorSchema);
let User = mongoose.model('User', userSchema);
let Interact = mongoose.model('Interact', interactSchema);
let Genre = mongoose.model('Genre', genreSchema);
let Chapter = mongoose.model('Chapter', chapterSchema);

export { Book, Author, User, Interact, Genre, Chapter };
