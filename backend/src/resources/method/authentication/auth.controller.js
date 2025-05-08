const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('../users/user.schema');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

module.exports = {

    login: async(req, res) => {
        try {
            const { email, user_pass } = req.body;

            console.log(req.body);

            // Check Mail
            const existingUser = await User.findOne({ email });
            if (!existingUser) {
                return res.status(409).json({
                    status: false,
                    message: 'Email not found!'
                });
            }

            const userPassword = existingUser.password;
            const adjustedHash = userPassword.replace('$2y$', '$2b$');
            const isPasswordValid = await bcrypt.compare(user_pass, adjustedHash);

            if(!isPasswordValid) {
                return res.status(400).json({
                    status: false,
                    message: 'Invalid password!'
                });
            }

            const data = {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
            };

            const token = jwt.sign({ existingUser }, process.env.SECRET_KEY);

            return res.status(200).json({
                status: true,
                message: 'SUCCESS_LOGIN',
                token: token,
                data: existingUser
            });

        } catch(err) {
            return res.status(400).json({
                status: false,
                message: 'INTERNAL_SERVER_ERROR',
                error: err.toString()
            });
        }
    },

    register: async(req, res) => {
        try {
            const { name, email, user_pass } = req.body;

            // Check Mail
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({
                    status: false,
                    message: 'Email already registered'
                });
            }

            const password = await bcrypt.hash(user_pass, 10);

            // Buat user baru
            const newUser = await User.create({ name, email, password });

            const data = {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            };

            return res.status(201).json({
                status: true,
                message: 'User created',
                data: data
            });

        } catch(err) {
            console.log(err);
            return res.status(400).json({
                status: false,
                message: 'INTERNAL_SERVER_ERROR',
                error: err.toString()
            }); 
        }
    }
}