import { Chapter, Book } from '../model/model.js';

const chapterController = {
    addAChapter: async (req, res) => {
        try {
            const chapter = new Chapter(req.body);
            const chapterNumber = parseInt(req.body.number);
            const book = await Book.findById(req.body.book);
            if (!book) {
                return res.status(400).json('The book is not valid!');
            } else {
                const existingChapter = await Chapter.findOne({ number: chapterNumber, book: book._id });
                if (existingChapter) return res.status(400).json('The chapter already exist!');
                const latestChapter = chapterNumber > book.latestChapter ? chapterNumber : book.latestChapter;
                await book.updateOne({ latestChapter: latestChapter });
            }
            const savedChapter = await chapter.save();
            res.status(200).json(savedChapter);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAChapter: async (req, res) => {
        try {
            const chapter = parseInt(req.query.chapter);
            const book = await Book.findById(req.params.id);
            const result = await Chapter.find({ book: book._id, number: chapter }).populate(
                'book',
                'name _id latestChapter',
            );
            if (result.length != 0) {
                res.status(200).json(result);
            } else res.status(404).json('Chapter not found!');
        } catch (error) {
            res.status(500).json({ message: error });
        }
    },
    updateChapter: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            const chapter = parseInt(req.query.chapter);
            const result = await Chapter.findOne({ book: book._id, number: chapter });
            await result.updateOne({ $set: req.body });
            res.status(200).json('Updated successfully!');
        } catch (error) {
            res.status(500).json({ message: error });
        }
    },
    deleteChapter: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            const chapter = parseInt(req.query.chapter);
            const deletedChapter = await Chapter.findOneAndDelete({ book: book._id, number: chapter });
            if (!deletedChapter) return res.status(400).json('The chapter is not valid!');
            else res.status(200).json('Deleted successfully!');
        } catch (error) {
            res.status(500).json({ message: error });
        }
    },
};
export default chapterController;
