import * as request from '../utils/httpRequest';

export const getBook = async () => {
    try {
        const res = await request.get('book');
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getDetailBook = async (bookId) => {
    try {
        const res = await request.get(`book/${bookId}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getNumberOfBook = async ({ genre, limit, page }) => {
    try {
        const res = await request.get(`genre/books/${genre}`, {
            params: {
                page,
                limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
