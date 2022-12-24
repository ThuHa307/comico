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

let Book = mongoose.model('Book', bookSchema);
let Author = mongoose.model('Author', authorSchema);

export { Book, Author };
