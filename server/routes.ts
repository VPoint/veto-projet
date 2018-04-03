const router = require('express').Router();
const pg = require('pg');
const requestHandler = require('./request-handler.ts');

const connection = process.env.DATABASE_URL || 'postgres://';

const db = new pg.Client(connection);
db.connect();

const getAll = ( table ) => (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.' + table, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.rows);
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
};

const getByAnimalNo = ( table ) => (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.' + table + ' WHERE vetosansfrontieresdb.' + table + '.animalno = \''+ req.params.id+ '\'' , (err, data) => {
    if (err) {
      console.log(req.params.id);
      console.log(err);
    } else {
      console.log(data.rows);
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
};

const getTraitementByExamenNo = ( ) => (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.traitement,' +
    'vetosansfrontieresdb.traitementexamen WHERE vetosansfrontieresdb.traitementexamen.examenno = \'' + req.params.id + '\';'
    , (err, data) => {
    if (err) {
      console.log(req.params.id);
      console.log(err);
    } else {
      console.log(data.rows);
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
};

const getPropByCliniqueNo = () => (req, res, next) => {
  db.query('SELECT * FROM vetosansfrontieresdb.proprietaire WHERE ' +
    'vetosansfrontieresdb.proprietaire.cliniqueno = \'' + req.params.id + '\';'
    , (err, data) => {
      if (err) {
        console.log(req.params.id);
        console.log(err);
      } else {
        console.log(data.rows);
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
}

router.get('/clinique', getAll('clinique'));
router.get('/personnel', getAll('personnel'));
router.get('/proprietaire', getAll('proprietaire'));
router.get('/animal', getAll('animal'));

router.get('/animal/:id', getByAnimalNo('animal'));
router.get('/examen/:id', getByAnimalNo('examen'));
router.get('/traitement/:id', getTraitementByExamenNo());
router.get('/proprietaire/:id', getPropByCliniqueNo());

router.post('/animal/create', (req, res, next) => {
  const data = req.body;
  console.log(req.body);

  db.query('INSERT INTO VETOSANSFRONTIERESDB.Animal(cliniqueNo, animalNo, propNo, nom, Atype,' +
    'description, dateDeNaissance, dateInscription, etat) VALUES (\'' + data.cliniqueno + '\' , \'' + data.animalno + '\' , \'' +
    data.propno + '\' , \'' + data.nom + '\' , \'' + data.atype + '\' , \'' + data.description + '\' , DATE \'' +
    data.datedenaissance + '\' , DATE \'' + data.dateinscription + '\' , \'' + data.etat + '\' );', (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Safely Added');
      res.send({result: 'SUCCESS'});
    }
  });
});

router.put('/animal/update/:id', (req, res, next) => {
  const data = req.body;
  console.log(req.body);

  db.query('UPDATE vetosansfrontieresdb.animal ' +
    ' SET cliniqueno=\'' + data.cliniqueno + '\', animalno=\'' + data.animalno + '\', propno=\'' + data.propno
    + '\', nom=\'' + data.nom + '\', atype=\'' + data.atype + '\', description=\'' + data.description + '\', ' +
    'datedenaissance=\'' + data.datedenaissance + '\', dateinscription=\'' + data.dateinscription + '\', etat=\''+ data.etat + '\'\n' +
    ' WHERE animalno = \'' + data.animalno + '\';', (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Safely Updated');
      res.send({result: 'SUCCESS'});
    }
  });
});

router.get('/animal/delete/:id', (req, res, next) => {
  return db.query('DELETE FROM vetosansfrontieresdb.animal WHERE ' +
    'vetosansfrontieresdb.animal.animalno = \'' + req.params.id + '\'', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Safely Deleted');
      res.send({result: 'SUCCESS'});
    }
  });
});

router.get('/examen', (req, res, next) => {
  const param = req.param.id;
  return db.query('SELECT * FROM examen WHERE vetosansfrontieresdb.animal.animalno = \'' + req.params.id + '\'' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Safely Deleted');
      res.send({result: 'SUCCESS'});
    }
  });
});

module.exports = router;
