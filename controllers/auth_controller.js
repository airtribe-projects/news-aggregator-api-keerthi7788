const authService = require('../services/authService');

exports.signup = async (req, res) => {

    try {

        const { name, email, password, preferences } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing fields' });
        }

        await authService.signup(req.body);

        res.status(200).json({ message: 'User created' });

    } catch (err) {

        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {

    try {

        const token = await authService.login(
            req.body.email,
            req.body.password
        );

        res.status(200).json({ token });

    } catch (err) {

        res.status(401).json({ error: err.message });
    }
};