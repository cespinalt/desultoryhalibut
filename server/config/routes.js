
// var UsersRouter = require('../users/users-router');
var NewsRouter = require('../news/news-router');
var GoogleTrendsRouter = require('../googletrends/google-trends.routes');

// var twitterRouter = require('../twitter/twitter-router');
// var sentimentRouter = require('../sentiment/sentiment-router');
// var financeRouter = require('../finance/finance-router')

// var requireAuth = function(req, res) {
  //  complete require auth function here
// }

module.exports = function(app) {

  app.use('/api/news', NewsRouter);
  app.use('/api', GoogleTrendsRouter);

  // app.use('/api/twitter', TwitterRouter);
  // app.use('/api/sentiment', SentimentRouter);
  // app.use('/api/finance', financeRouter)
  // app.use('/api/users', UsersRouter);

};
