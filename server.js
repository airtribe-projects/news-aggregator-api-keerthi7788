require('dotenv').config();
const express = require('express');

const authRoutes = require('./routes/authRoutes');
const preferenceRoutes = require('./routes/preferenceRoutes');
const newsRoutes = require('./routes/newsRoutes');

const app = express();

app.use(express.json());

app.use('/users', authRoutes);
app.use('/users', preferenceRoutes);
app.use('/news', newsRoutes);

module.exports = app;

if (require.main === module) {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}