'use strict';
  
define(["Backbone"], Backbone => {
  return Backbone.View.extend({
  	initialize(){
      require(["../app/views/footer"], footer => {
        this.footer = new footer({
          el : "#footer"
        });
      });
      this.render();
  	},

    render(){

    }
  });
});
