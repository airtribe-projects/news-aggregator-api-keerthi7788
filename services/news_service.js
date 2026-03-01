const axios = require('axios');

class NewsService {

    async getNews(preferences) {

        const category = preferences[0] || 'general';

        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines`,
            {
                params: {
                    category,
                    apiKey: process.env.NEWS_API_KEY,
                    country: 'us'
                }
            }
        );

        return response.data.articles;
    }
}

module.exports = new NewsService();