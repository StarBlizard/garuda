const Twitter = require('../services/twitter.js');

module.exports = {
  
  feed(req, res){
    Twitter
      .client
      .get('search/tweets', { q: 'akshay', count : 10 }, (error, tweets, response) => {
        if(error){
          console.log(error);
          return res.status(500).send({
            error : true,
            data  : error
          });
        };
  
        return res.status(200).send(tweets.statuses);
      });
  }
};
