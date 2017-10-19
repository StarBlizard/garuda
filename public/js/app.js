'use strict';

require.config({
  baseUrl : 'js/lib',
  paths   : {
    text       : "../plugins/text",
    jquery     : "jquery",
    underscore : "underscore",
    Backbone   : "backbone"
  }
});

require(["./js/router.js", "jquery"],
  (router) => {
    let App = {
      Initialize : () => {
        this.router = new router();
      }
    };

    $(App.Initialize);
});     
