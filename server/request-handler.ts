const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');

const connection = process.env.DATABASE_URL || 'postgres://client:serverPASSWORD@localhost:5432/vetoprojet';

const db = new pg.Client({
  connectionString: connection,
});
db.connect();

exports.getPersonnel = (req, res, next) => {
  return db.query('SELECT * FROM vetosansfrontieresdb.personnel', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.rows);
      res.send(data.rows);
    }
  });
};

exports.getClinique = (req, res, next) => {
  return db.query('SELECT * FROM vetosansfrontieresdb.clinique', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(data.rows));
      res.send(JSON.stringify(data.rows));
    }
  });
};
