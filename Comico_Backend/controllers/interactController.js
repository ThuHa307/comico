import { User, Interact } from '../model/model.js';

const interactController = {
    getAllBook: async (req, res) => {
        try {
            const type = req.query.type;
            const validTypes = ['follow', 'favorite'];
            if (!validTypes.includes(type)) {
                return res.status(400).json({ message: 'Invalid type value.' });
            }
            const user = await User.findById(req.params.id);
            const favorites = await Interact.find({ user: user }, { type: type }).populate('book');
            res.status(200).json(favorites);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addABook: async (req, res) => {
        try {
            const userId = req.params.id;
            const bookId = req.body.id;
            const type = req.query.type;
            const validTypes = ['follow', 'favorite'];
            if (!validTypes.includes(type)) {
                return res.status(400).json({ message: 'Invalid type value.' });
            }
            const interact = await Interact.findOne({ user: userId, type: type });
            if (interact && interact.book.includes(bookId.toString())) {
                return res.status(400).json({ message: 'The book already exists in the following list!' });
            }
            await Interact.updateOne(
                { user: userId, type: type },
                { $push: { book: bookId } },
                { upsert: true },
            ).exec();
            res.status(200).json('Added this book in the follwing list!');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteABook: async (req, res) => {
        try {
            const userId = req.params.id;
            const type = req.query.type;
            const bookId = req.body.id;

            const interact = await Interact.findOne({ user: userId, type: type });
            if (!interact) res.status(404).json({ message: 'Wrong userid or type' });

            if (interact.book.length === 0) return res.status(200).json({ message: 'The list is empty!' });
            interact.book.splice(bookId, 1);

            await interact.save();

            res.status(200).json({ message: 'Delete successfully!' });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default interactController;
