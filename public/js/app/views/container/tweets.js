'use strict';
  
define(["Backbone"], Backbone => {
  return Backbone.View.extend({
    url     : '/tweets',
    tagName : 'section',
    id      : '#tweets',

  	initialize(){
      require(["../app/collections/tweets", "../app/views/container/tweet"], (tweetsCollection, tweetView) => {
        this.childConstructor = tweetView; 
        this.collection       = new tweetsCollection();
        this.collection.fetch();

        this.collection.on('add', this.render, this);
      });
  	},

    render(model){
      let tweet = new this.childConstructor({
        model : model
      });

      this.$el.append(tweet.$el);
    }
  });
});
