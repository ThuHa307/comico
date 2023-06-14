import * as request from '../utils/httpRequest';

export const getBook = async () => {
    try {
        const res = await request.get('book');
        return res;
    } catch (err) {
        console.log(err);
    }
};
