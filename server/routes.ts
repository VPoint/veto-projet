const router = require('express').Router();
const pg = require('pg');
const requestHandler = require('./request-handler.ts');


const connection = process.env.DATABASE_URL || 'postgres://client:serverPASSWORD@localhost:5432/vetoprojet';

const db = new pg.Client(connection);
db.connect();

router.get('/open', function (req, res) {
  const openTickets = [];
  const query = db.query('SELECT * FROM personnel', (err, res) => {
    if (err) {
      console.log(err);
    } else {
      //console.log(res);
      return res.rows;
    }
  });
});

module.exports = router;
