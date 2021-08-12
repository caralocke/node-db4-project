
exports.up = function(knex) {
  return knex.schema
  .createTable('ingredients', (table) => {
      table.increments('ingredients_id')
      table.string('recipe_name', 256).unique().notNullable()
      table.timestamp('created_at')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('ingredients')
};
