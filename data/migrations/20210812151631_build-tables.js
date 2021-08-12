
exports.up = function(knex) {
  return knex.schema
  .createTable('ingredients', (table) => {
      table.increments('ingredients_id')
      table.string('ingredient_name', 128).unique().notNullable()
  })
  .createTable('recipes', (table) => {
      table.increments('recipes_id')
      table.string('recipe_name', 128).unique().notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('ingredients')
};
