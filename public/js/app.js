'use strict';

require.config({
  baseUrl : 'js/lib',
  paths   : {
    css        : "../plugins/css",
    text       : "../plugins/text",
    jquery     : "jquery",
    underscore : "underscore",
    Backbone   : "backbone"
  }
});

require(["./js/router.js", "jquery", "Backbone", "css!/css/bootstrap"],
  router => {
    let App = {
      Initialize : () => {
        this.router = new router();
        Backbone.history.start();
      }
    };

    $(App.Initialize);
});     
