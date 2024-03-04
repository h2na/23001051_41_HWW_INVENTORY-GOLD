/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('customer').del()
  await knex('customer').insert([
    {customer: 'UK COLLECTABLES', phone: '0695346555',address:'Berkeley Gardens 12  Brewery'},
    {customer: 'ASTRA', phone: '0695322555',address:'Menara Astra, Jl. Jenderal Sudirman No.Kav. 5 6, RT.10/RW.11, Karet Tengsin, Tanah Abang, Central Jakarta City, Jakarta 10220'},
    {customer: 'PERTAMINA', phone: '43433222',address:'Grha Pertamina, Jl. Medan Merdeka Timur No.11-13, Jakarta 10110 Indonesia'}
  ]);
};
