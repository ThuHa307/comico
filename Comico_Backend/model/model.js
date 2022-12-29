import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
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
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
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

let Book = mongoose.model('Book', bookSchema);
let Author = mongoose.model('Author', authorSchema);
let User = mongoose.model('User', userSchema);

export { Book, Author, User };
