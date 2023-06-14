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
    reads: {
        type: Number,
    },
    view: {
        type: Number,
    },
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

let Book = mongoose.model('Book', bookSchema);
let Author = mongoose.model('Author', authorSchema);
let User = mongoose.model('User', userSchema);
let Interact = mongoose.model('Interact', interactSchema);

export { Book, Author, User, Interact };
