'use strict';

define(["Backbone", "../../app/models/user"], (Backbone, User) => {
  return Backbone.Router.extend({

    model      : new User(),

    initialize : function(){
      this.model
        .fetch()
        .then( user => {
          if(user){
            require(["../app/views/container/container", "../app/views/sidebar/sidebar"], ( container, sidebar ) => { 
              this.container = new container({
                el     : "#container",
                logged : true
              });
    
              this.sidebar = new sidebar({
                el    : "#sidebar",
                model : user
              });
            });
          }
        })
        .fail( message => {     
            require(["../app/views/container/container", "../app/views/footer/footer"], ( container, footer ) => { 
              this.container = new container({
                el : "#container"
              });
              this.footer    = new footer({
                el : "#footer"
              });
            });
        });
    }

  });
});
