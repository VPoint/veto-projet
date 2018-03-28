const router = require('express').Router();
const pg = require('pg');
const requestHandler = require('./request-handler.ts');

const connection = process.env.DATABASE_URL || 'postgres://client:serverPASSWORD@localhost:5432/vetoprojet';

const db = new pg.Client(connection);
db.connect();

router.get('/clinique', (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.clinique', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.rows);
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});

router.get('/personnel', (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.personnel', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.rows);
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});

router.get('/proprietaires', (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.proprietaires', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.rows);
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});

router.get('/animal', (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.animal', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.rows);
      res.send({result: 'SUCCESS', data: JSON.stringify(data.rows)});
    }
  });
});

router.get('/animal/create', (req, res, next) => {
  const data = {text: req.body.formData, complete: false};
  const query = {
    text: 'INSERT INTO VETOSANSFRONTIERESDB.Animal(cliniqueNo, animalNo, propNo, nom, Atype,' +
    'description, dateDeNaissance, dateInscription, etat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);',
    values: [data.text, data.complete]
  };

  db.query(query);
  db.query('SELECT * FROM vetosansfrontieresdb.animal ORDER BY animalNo ASC', (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.rows);
      res.send({result: 'SUCCESS', data: JSON.stringify(info.rows)});
    }
  });
});

router.get('/animal/update/:id', (req, res, next) => {
  const query = {
    text: 'UPDATE vetosansfrontieresdb.animal ' +
    ' SET cliniqueno=?, animalno=?, propno=?, nom=?, atype=?, description=?, ' +
    'datedenaissance=?, dateinscription=?, etat=?\n' +
    ' WHERE id = %//%;',
    values: ''
  };

  db.query(query);
  db.query('SELECT * FROM vetosansfrontieresdb.animal ORDER BY animalNo ASC', (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.rows);
      res.send(info.rows);
    }
  });
});

router.get('/animal/delete/:id', (req, res, next) => {
  return db.query('DELECT FROM vetosansfrontieresdb.animal WHERE id=', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Safely Deleted');
      res.send({result: 'SUCCESS'});
    }
  });
});

module.exports = router;
