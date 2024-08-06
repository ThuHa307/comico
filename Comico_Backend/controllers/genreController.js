import { Book, Genre } from '../model/model.js';
import { paginatedResults } from '../utils/pagination.js';

const genreController = {
    addAGenre: async (req, res) => {
        try {
            const newGenre = new Genre(req.body);
            const savedGenre = await newGenre.save();
            res.status(200).json(savedGenre);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllGenre: async (req, res) => {
        try {
            const genres = await Genre.find({}, null, { limit: 12 });
            res.status(200).json(genres);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBook: async (req, res) => {
        try {
            const name = req.params.name;
            const genres = await Genre.find({ name: name }, null, { limit: 12 }).populate('books');
            res.status(200).json(genres);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBooksByGenre: async (req, res) => {
        try {
            const genre = req.params.genre;
            const getBooksByGenreWithPaginate = paginatedResults(Genre, { genreCode: genre });
            await getBooksByGenreWithPaginate(req, res, async () => {
                const results = res.paginatedResults;
                if (!results) {
                    return res.status(404).json({ error: 'Genre not found' });
                }
                res.status(200).json(results);
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAGenre: async (req, res) => {
        try {
            const genre = await Genre.findById(req.params.id).populate('books');
            res.status(200).json(genre);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateAGenre: async (req, res) => {
        try {
            const genre = await Genre.findOne({ genreCode: req.params.code });
            await genre.updateOne({ $set: req.body });
            res.status(200).json('Updated successfully!');
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteGenre: async (req, res) => {
        try {
            await Book.updateMany({ genres: req.params.id }, { $pull: { genres: req.params.id } });
            await Genre.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully!');
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default genreController;
