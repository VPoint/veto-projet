const { Client } = require('pg');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./src/assets/serverconfig.json'));

const connectionString = process.env.DATABASE_URL || 'postgres://' + config.username +
  ':' + config.password + '@' + config.host + ':' + config.port + '/' + config.database;

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
});

database.end();
