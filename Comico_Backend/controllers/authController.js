import bcrypt from 'bcrypt';
import { User } from '../model/model.js';
import jwt from 'jsonwebtoken';

let refreshTokens = [];
const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //create new user
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            //save to database
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },

    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_ACCESS_TOKEN,
            { expiresIn: '30s' },
        );
    },

    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_REFRESH_TOKEN,
            { expiresIn: '365d' },
        );
    },

    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                res.status(404).json('Wrong username!');
            }
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) res.status(404).json('Wrong password!');
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);
                //Save token in cookie
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    path: '/',
                    sameSite: 'strict', // prevent xss attacks
                });
                const { password, ...others } = user._doc;
                res.status(200).json({ others, accessToken });
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },

    requestRefreshToken: async (req, res) => {
        // take refershToken from user
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) res.status(401).json("You're not authenticated!");
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
        // verify refresh token
        jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
            if (err) {
                console.log(err);
            }
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                path: '/',
                sameSite: 'strict',
            });
            res.status(200).json(newAccessToken);
        });
    },

    //LOG OUT
    logOut: async (req, res) => {
        //Clear cookies when user logs out
        refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
        res.clearCookie('refreshToken');
        res.status(200).json('Logged out successfully!');
    },
};

export default authController;
