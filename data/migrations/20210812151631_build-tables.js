
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
  .createTable('steps', (table) => {
      table.increments('steps_id')
      table.integer('step_number')
        .unsigned()
        .notNullable()
    table.string('instructions')
        .notNullable()
    table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
};
