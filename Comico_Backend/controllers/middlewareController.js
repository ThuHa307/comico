import jwt from 'jsonwebtoken';

const middlewareController = {
    verifyToken: async (req, res, next) => {
        const token = req.headers.token;
        // const refreshToken = req.cookies.refreshToken;
        if (token) {
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
                if (err) return res.status(403).json('Token is invalid!');
                req.user = user;
                next();
            });
        } else return res.status(401).json('You are not allowed to access this!');
    },
};
export default middlewareController;
