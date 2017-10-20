'use strict';
  
define(["Backbone"], Backbone => {
  return Backbone.View.extend({
  	initialize(){
      require(["../app/views/footer", "../app/views/container"], (footer, container) => {

        this.container = new container({
          el : "#container"
        });

        this.footer    = new footer({
          el : "#footer"
        });
      });
      this.render();
  	},

    render(){

    }
  });
});
