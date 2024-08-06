import * as request from '../utils/httpRequest';

export const getAnAuthor = async (id) => {
    try {
        const res = await request.get(`author/${id}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
