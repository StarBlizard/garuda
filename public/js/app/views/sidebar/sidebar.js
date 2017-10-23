'use strict';
  
define(["Backbone", "text!/js/app/views/sidebar/sidebar.html", "css!/js/app/views/sidebar/sidebar"], (Backbone, template) => {
  return Backbone.View.extend({
    template : _.template(template),

  	initialize(opc){
      this.render();
  	},

    render(){
      console.log(this.model);
      this.$el.append(this.template(this.model));
      this.$el.css("color", "#"+this.model.textColor);
      this.$el.css("background-color", "#"+this.model.headColor);
    }
  });
});
