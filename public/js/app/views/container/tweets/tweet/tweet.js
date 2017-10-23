'use strict';
  
define(["Backbone"], Backbone => {
  return Backbone.View.extend({
    tagName   : 'p',
    className : 'tweet',

  	initialize(){
      this.render();
  	},

    render(model){
      let data = this.model.attributes;

      this.$el.append("<div>"+ data.source +"<p>" + data.text + "</p></div>");
    }
  });
});
