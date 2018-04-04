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
  db.query('SELECT TR.* FROM VETOSANSFRONTIERESDB.Traitementexamen AS TE, VETOSANSFRONTIERESDB.traitement AS TR WHERE' +
    ' TE.traitementno = TR.traitementno AND TE.examenno = \'' + req.params.id + '\';' , (err, data) => {
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

router.get('/R1', (req, res, next) => {
  return db.query('SELECT cliniqueno, cliniquenom, rue, ville, province, codepostal, gestionNo ' +
    'FROM VETOSANSFRONTIERESDB.Clinique ORDER BY cliniqueno;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R2', (req, res, next) => {
  return db.query('SELECT DISTINCT nom FROM VETOSANSFRONTIERESDB.Animal;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R3', (req, res, next) => {
  return db.query('SELECT P.propno, P.nom, A.* FROM VETOSANSFRONTIERESDB.Proprietaire AS P, ' +
    'VETOSANSFRONTIERESDB.Animal AS A WHERE P.propno = A.propno AND A.cliniqueno =\'C1\';' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R4', (req, res, next) => {
  return db.query('SELECT * FROM VETOSANSFRONTIERESDB.Examen WHERE animalno=\'A1\';' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R5', (req, res, next) => {
  return db.query('SELECT TR.* FROM VETOSANSFRONTIERESDB.Traitementexamen AS TE, VETOSANSFRONTIERESDB.traitement AS TR' +
    ' WHERE TE.traitementno = TR.traitementno AND TE.examenno = \'E1\';' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R6', (req, res, next) => {
  return db.query('SELECT P.cliniqueno, SUM(salaire) AS SalaireTotal FROM VETOSANSFRONTIERESDB.Personnel AS P GROUP BY' +
    ' P.cliniqueno ORDER BY P.cliniqueno ;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R7', (req, res, next) => {
  return db.query('SELECT An.cliniqueno, COUNT(animalno) AS NOMBRE_ANIMAUX FROM VETOSANSFRONTIERESDB.Animal AS An WHERE ' +
    'An.atype=\'chat\' GROUP BY An.cliniqueno;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R8', (req, res, next) => {
  return db.query('SELECT MIN(cout) AS minCout, MAX(cout) AS maxCout, AVG(cout) AS avgCout FROM VETOSANSFRONTIERESDB.Traitement;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R9', (req, res, next) => {
  return db.query('SELECT prenom, nomdefamille FROM VETOSANSFRONTIERESDB.Personnel WHERE' +
    ' (extract(year from current_date ) - extract(year from datedenaissance)) >= 50 ORDER BY nomdefamille;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R10', (req, res, next) => {
  return db.query('SELECT * FROM VETOSANSFRONTIERESDB.proprietaire WHERE nom LIKE \'%blay%\';' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R11', (req, res, next) => {
  return db.query('DELETE FROM VETOSANSFRONTIERESDB.Personnel WHERE fonction=\'veterinaire\' AND prenom = \'Jean\' ' +
    'AND nomdefamille = \'Tremblay\' ;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R12', (req, res, next) => {
  return db.query('SELECT DISTINCT RST.nom FROM (SELECT PR.nom, AN.atype FROM VETOSANSFRONTIERESDB.Proprietaire AS PR, VETOSANSFRONTIERESDB.Animal AS AN \n' +
    '\n' +
    'WHERE PR.propno = AN.propno) \n' +
    '\n' +
    'AS RST WHERE NOT EXISTS ( SELECT y.atype FROM VETOSANSFRONTIERESDB.Animal AS y\n' +
    '\t\n' +
    '\tWHERE y.atype NOT IN(\n' +
    '\n' +
    '\t\tSELECT z.atype FROM (SELECT PR.nom, AN.atype FROM VETOSANSFRONTIERESDB.Proprietaire AS PR, \n' +
    '\t\t\t\n' +
    '\t\t\tVETOSANSFRONTIERESDB.Animal AS AN \n' +
    '\t\t\t\n' +
    '\t\t\tWHERE PR.propno = AN.propno)  AS z\n' +
    '\n' +
    '\t\tWHERE (z.nom = RST.nom) AND (z.atype = y.atype) ));;' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
router.get('/R13', (req, res, next) => {
  return db.query('SELECT DISTINCT PR.nom FROM VETOSANSFRONTIERESDB.Proprietaire AS PR, VETOSANSFRONTIERESDB.Animal AS AN \n' +
    '                     WHERE PR.propno = AN.propno AND AN.atype = \'chat\' OR AN.atype =\'chien\';' , (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({result: 'SUCCESS', data: data.rows});
    }
  });
});
module.exports = router;
