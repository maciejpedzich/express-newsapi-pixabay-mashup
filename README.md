# express-newsapi-pixabay-mashup

Just so you know, I made this demo because I was bored, **do not use it in a production setup**. Instead, Use it as a sort of _baseline_, to throw even more technologies/APIs into the mix **for fun**.

## How does it work?

Upon any type of request, the app first sends a request is sent to [News API](https://newsapi.org/) for articles written in the past 24 hours, that contain the word _doughnut_ in the title. After that, the Express app sends a request to [Pixabay API](https://pixabay.com/api/docs/) for the latest images matching given `searchTerm`. If the number of news articles meeting criteria above is greater than 50, then `searchTerm` is set to `motorbike`. Otherwise, it's set to `volleyball`. Then, a random image is picked and sent as a response.

## Environment variables

```sh
PORT= # Port to serve the app on
PIXABAY_API_KEY= # Your Pixabay API key
NEWS_API_KEY= # Your News API key
```

## Running the app

Just type in `node app.js` and voila, the app should now be served on given `PORT`
