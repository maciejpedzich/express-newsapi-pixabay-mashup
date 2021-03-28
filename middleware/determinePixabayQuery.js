const fetch = require('node-fetch');

async function determinePixabayQuery(req, res, next) {
  try {
    const yesterdayShortDate = new Date(Date.now() - 86400000)
      .toISOString()
      .substr(0, 10);

    const { totalResults } = await (
      await fetch(
        `https://newsapi.org/v2/everything?qInTitle=doughnut&from=${yesterdayShortDate}&sortBy=relevancy&pageSize=1&apiKey=${process.env.NEWS_API_KEY}`
      )
    ).json();

    req.searchTerm = totalResults > 50 ? 'motorbike' : 'volleyball';

    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = determinePixabayQuery;
