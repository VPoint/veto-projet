const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');

const connection = process.env.DATABASE_URL || 'postgres://client:serverPASSWORD@localhost:5432/vetoprojet';

const db = new pg.Client({
  connectionString: connection,
});
db.connect();

exports.getOpenTickets = (req, res, next) => {
  const openTickets = [];
  const query = db.query('SELECT * FROM animal')
    .then(result => console.log(result))
    .catch(e => console.error(e.stack))
    .then(() => db.end());
  /*query.on('row', (row) => {
    openTickets.push(row);
  });
  query.on('end', () => {
    next();
    return res.json(openTickets);
  });*/
};
