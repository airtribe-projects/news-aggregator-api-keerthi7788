const users = [];

class UserRepository {

    async create(user) {
        users.push(user);
        return user;
    }

    async findByEmail(email) {
        return users.find(u => u.email === email);
    }

    async findById(id) {
        return users.find(u => u.id === id);
    }

    async updatePreferences(id, preferences) {
        const user = users.find(u => u.id === id);
        if (user) {
            user.preferences = preferences;
        }
        return user;
    }
}

module.exports = new UserRepository();