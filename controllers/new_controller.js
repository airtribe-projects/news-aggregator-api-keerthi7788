const newsService = require('../services/newsService');
const userRepository = require('../repositories/userRepository');

exports.getNews = async (req, res) => {

    try {

        const user = await userRepository.findById(req.userId);

        const news = await newsService.getNews(user.preferences);

        res.status(200).json({ news });

    } catch (err) {

        res.status(400).json({ error: err.message });
    }
};