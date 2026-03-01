const express = require('express');
const router = express.Router();

const controller = require('../controllers/preferenceController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/preferences', authMiddleware, controller.getPreferences);
router.put('/preferences', authMiddleware, controller.updatePreferences);

module.exports = router;