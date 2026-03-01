const preferenceService = require('../services/preferenceService');

exports.getPreferences = async (req, res) => {

    try {

        const prefs = await preferenceService.getPreferences(req.userId);

        res.status(200).json({ preferences: prefs });

    } catch (err) {

        res.status(400).json({ error: err.message });
    }
};

exports.updatePreferences = async (req, res) => {

    try {

        const prefs = await preferenceService.updatePreferences(
            req.userId,
            req.body.preferences
        );

        res.status(200).json({ preferences: prefs });

    } catch (err) {

        res.status(400).json({ error: err.message });
    }
};