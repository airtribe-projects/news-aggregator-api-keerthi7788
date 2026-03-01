const express = require('express');
const router = express.Router();

const controller = require('../controllers/newsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, controller.getNews);

module.exports = router;