import * as request from '../utils/httpRequest';

export const getBooksByGenre = async (genreCode) => {
    try {
        const res = await request.get(`genre/books/${genreCode}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getBooks = async (name) => {
    try {
        const res = await request.get(`genre/${name}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
