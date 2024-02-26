/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('msUser').del()
  await knex('msUser').insert([
    {id: 1, name: 'master', password:'master'},
    {id: 2, name: 'vendor', password:'vendor'},
  ]);
};
