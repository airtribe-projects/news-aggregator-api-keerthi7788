const userRepository = require('../repositories/userRepository');

class PreferenceService {

    async getPreferences(userId) {

        const user = await userRepository.findById(userId);

        if (!user) throw new Error('User not found');

        return user.preferences;
    }

    async updatePreferences(userId, preferences) {

        const user = await userRepository.updatePreferences(userId, preferences);

        if (!user) throw new Error('User not found');

        return user.preferences;
    }
}

module.exports = new PreferenceService();