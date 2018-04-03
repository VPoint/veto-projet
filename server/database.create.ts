const { Client } = require('pg');
const fs = require('fs');
const connectionString = process.env.DATABASE_URL || 'postgres://';

const sql = fs.readFileSync('./src/assets/bdschema.sql').toString()
  .replace(/(\r\n|\n|\r)/gm, ' ') // remove newlines
  .replace(/\s+/g, ' '); // excess white space

const sqlData = fs.readFileSync('./src/assets/data.sql').toString()
  .replace(/(\r\n|\n|\r)/gm, ' ') // remove newlines
  .replace(/\s+/g, ' '); // excess white space

const database = new Client({
  connectionString: connectionString,
});
database.connect();

database.query(sql, (err, res) => {
  console.log(err, res);
});

database.query(sqlData, (err, res) => {
  console.log(err, res);
}).then(
  database.end();
);
