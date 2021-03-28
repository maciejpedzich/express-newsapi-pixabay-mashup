const fetch = require('node-fetch');

async function sendRandomImage(req, res, next) {
  const { hits } = await (
    await fetch(
      `https://pixabay.com/api/?q=${req.searchTerm}&order=latest&per_page=3&image_type=photo&safesearch=true&key=${process.env.PIXABAY_API_KEY}`
    )
  ).json();

  const { webformatURL } = hits[~~(Math.random() * hits.length)];
  const imageResponse = await fetch(webformatURL);
  const buffer = await imageResponse.buffer();

  res.writeHead(200, {
    'Content-Type': imageResponse.headers.get('Content-Type'),
    'Content-Length': buffer.length
  });
  res.end(buffer);
}

module.exports = sendRandomImage;
