const { Client } = require('pg');
const fs = require('fs');
const connectionString = process.env.DATABASE_URL || 'postgres://client:serverPASSWORD@localhost:5432/vetoprojet';

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

database.query(sql + ' ; ' + sqlData, (err, res) => {
  console.log(err, res);
  database.end();
});
