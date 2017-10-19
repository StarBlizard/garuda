exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('users', table => {
    table.increments();
    table.text("email");
    table.text("twitter_id");
  });
};

exports.down = function(knex, Promise) {
   knex.schema.dropTable('users');
};
