'use strict';
  
define(["Backbone", "text!/js/app/views/container/landing.html"], (Backbone, template) => {
  return Backbone.View.extend({
    tagName   : "div",
    id        : "landing",
    template : template,

  	initialize(){
      this.render();
  	},

    render(){
      this.$el.html( this.template );
    }
  });
});
