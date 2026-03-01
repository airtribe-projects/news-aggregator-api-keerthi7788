const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');

const User = require('../models/userModel');
const userRepository = require('../repositories/userRepository');

class AuthService {

    async signup(data) {

        const existing = await userRepository.findByEmail(data.email);

        if (existing) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = new User(
            uuid(),
            data.name,
            data.email,
            hashedPassword,
            data.preferences || []
        );

        await userRepository.create(user);

        return user;
    }

    async login(email, password) {

        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new Error('User not found');
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return token;
    }
}

module.exports = new AuthService();