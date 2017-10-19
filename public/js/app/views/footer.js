'use strict';
  
define(["Backbone"], Backbone => {
  return Backbone.View.extend({
  	initialize(){
      this.render();
  	},

    render(){
      this.$el.html("<span>Footer</span>");
    }
  });
});
