import { Book } from '../model/model.js';

export const paginatedResults = function (model, query) {
    return async (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = {};
        if (endIndex < (await model.countDocuments().exec())) {
            results.next = {
                page: page + 1,
                limit: limit,
            };
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit,
            };
        }
        try {
            const dataQuery = query || {};
            if (model === Book) results.data = await model.find(dataQuery).limit(limit).skip(startIndex).exec();
            const genre = await model
                .findOne(dataQuery)
                .populate({
                    path: 'books',
                    options: {
                        skip: startIndex,
                        limit: limit,
                    },
                })
                .exec();
            results.lastPage = Math.ceil(genre.total / limit);
            results.data = genre.books;

            res.paginatedResults = results;
            next();
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    };
};
