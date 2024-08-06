import { Book, Author, Genre } from '../model/model.js';

const bookController = {
    addABook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if (req.body.author) {
                const author = Author.findById(req.body.author);
                await author.updateOne({ $push: { books: savedBook._id } });
            }
            if (req.body.genres && req.body.genres.length > 0) {
                const genres = await Genre.find({ name: { $in: req.body.genres } });
                for (const genre of genres) {
                    genre.books.push(savedBook._id);
                    genre.total++;
                    await genre.save();
                }
            }
            res.status(200).json(savedBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllBook: async (req, res) => {
        try {
            const books = await Book.find({}, null, { limit: 12 }).populate('author');
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate('author');
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateBook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            if (req.body.author) {
                await Author.updateOne({ _id: book.author }, { $pull: { books: req.params.id } });
                const newAuthor = await Author.findById(req.body.author);
                await newAuthor.updateOne({ $push: { books: req.params.id } });
            }
            if (req.body.genres) {
                const currentGenres = await Genre.find({ name: { $in: book.genres } });
                for (const genre of currentGenres) {
                    genre.books = genre.books.filter((book) => book.toString() !== req.params.id);
                    genre.total = genre.books.length;
                    await genre.save();
                }
                const genres = await Genre.find({ name: { $in: req.body.genres } });
                for (const genre of genres) {
                    genre.books.push(req.params.id);
                    genre.total = genre.books.length;
                    await genre.save();
                }
            }
            await book.updateOne({ $set: req.body });
            res.status(200).json('Updated successfully!');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteBook: async (req, res) => {
        try {
            const genres = await Genre.find({ books: req.params.id });
            await Author.updateMany({ books: req.params.id }, { $pull: { books: req.params.id } });
            if (genres.length > 0) {
                for (const genre of genres) {
                    genre.books = genre.books.filter((book) => book.toString() !== req.params.id);
                    genre.total = genre.books.length;
                    await genre.save();
                }
            }
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully!');
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

export default bookController;
