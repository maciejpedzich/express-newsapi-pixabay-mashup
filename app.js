const express = require('express');
const dotenv = require('dotenv');

const determinePixabayQuery = require('./middleware/determinePixabayQuery');
const sendRandomImage = require('./middleware/sendRandomImage');

const app = express();

dotenv.config();

app.get('/', determinePixabayQuery, sendRandomImage);
app.all('*', (req, res) => res.redirect('/'));

app.use((error, req, res, next) => {
  return res.status(500).json({ error: error.message });
});

app.listen(process.env.PORT, () => console.log('Server started successfully'));
