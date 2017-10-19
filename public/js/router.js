'use strict';

define(["Backbone"], function(Backbone){
  return Backbone.Router.extend({

    routes : {
      '' : 'home',
      '/': 'home'
    },
    
    initialize : function(){
      require(["./js/app/views/mainContainer.js"], (mainContainer) => { 
        this.mainContainer = new mainContainer({
          el : "#MainContainer"
        });
      });
    },

    home : function(){
    }

  });
});
