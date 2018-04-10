const express = require('express');
const fs = require('fs');
const pg = require('pg');

const config = JSON.parse(fs.readFileSync('./src/assets/serverconfig.json'));

const connection = process.env.DATABASE_URL || 'postgres://' + config.username +
  ':' + config.password + '@' + config.host + ':' + config.port + '/' + config.database;

const db = new pg.Client(connection);
db.connect();

exports.getAll = function(table) {
  return (req, res, next) => {
    db.query('SELECT * FROM vetosansfrontieresdb.' + table, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data.rows);
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}

exports.getByAnimalNo = function(table) {
  return (req, res, next) => {
    db.query('SELECT * FROM vetosansfrontieresdb.' + table +
      ' WHERE vetosansfrontieresdb.' + table + '.animalno = \'' + req.params.id + '\' AND ' +
      ' vetosansfrontieresdb.' + table + '.cliniqueno = \'' + req.params.cliniqueid + '\'',
      (err, data) => {
        if (err) {
          console.log(req.params.id);
          console.log(err);
        } else {
          console.log(data.rows);
          res.send({result: 'SUCCESS', data: data.rows});
        }
      });
  };
}

exports.deleteIndependentFrom = function(table, key) {
  return (req, res, next) => {
    return db.query('DELETE FROM vetosansfrontieresdb.' + table + ' WHERE ' +
      'vetosansfrontieresdb.' + table + '.' + key + ' = \'' + req.params.id + '\'', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Safely Deleted');
        res.send({result: 'SUCCESS'});
      }
    });
  };
}

exports.deleteDependentFrom = function(table, key) {
  return (req, res, next) => {
    console.log(req.params);
    return db.query('DELETE FROM vetosansfrontieresdb.' + table + ' WHERE ' +
      'vetosansfrontieresdb.' + table + '.' + key + ' = \'' + req.params.id + '\' AND cliniqueno = \'' +
      req.params.cliniqueid + '\'', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Safely Deleted');
        res.send({result: 'SUCCESS'});
      }
    });
  };
}

exports.getTraitementByExamenNo = function(){
  return (req, res, next) => {
    db.query('SELECT * FROM VETOSANSFRONTIERESDB.Traitementexamen AS TE, VETOSANSFRONTIERESDB.traitement AS TR WHERE' +
      ' TE.traitementno = TR.traitementno AND TE.examenno = \'' + req.params.id + '\';', (err, data) => {
      if (err) {
        console.log(req.params.id);
        console.log(err);
      } else {
        console.log(data.rows);
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}

exports.getTraitementByAnimalNo = function() {
  return (req, res, next) => {
    db.query('SELECT TR.* FROM VETOSANSFRONTIERESDB.Traitementexamen AS TE, VETOSANSFRONTIERESDB.traitement AS TR,' +
      ' VETOSANSFRONTIERESDB.examen AS EX WHERE' +
      ' TE.traitementno = TR.traitementno AND EX.examenno = TE.examenno AND EX.animalno = \'' + req.params.id + '\';', (err, data) => {
      if (err) {
        console.log(req.params.id);
        console.log(err);
      } else {
        console.log(data.rows);
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}

exports.getPropByCliniqueNo = function(){
  return (req, res, next) => {
    db.query('SELECT * FROM vetosansfrontieresdb.proprietaire WHERE ' +
      'vetosansfrontieresdb.proprietaire.cliniqueno = \'' + req.params.id + '\' ORDER BY propno;'
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
}

exports.getAnimalByCliniqueNo = function() {
  return (req, res, next) => {
    db.query('SELECT * FROM vetosansfrontieresdb.animal WHERE ' +
      'vetosansfrontieresdb.animal.cliniqueno = \'' + req.params.id + '\' ORDER BY animalno;'
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
}

exports.createClinique = function(){
  return (req, res, next) => {
    const data = req.body;
    console.log(req.body);

    db.query('INSERT INTO VETOSANSFRONTIERESDB.Clinique (cliniqueNo, cliniqueNom, gestionNo, rue, ville, province,' +
      'codePostal, numTelephone, numTelecopieur ) VALUES (\'' + data.cliniqueno + '\' , \'' + data.cliniquenom + '\' , \'' +
      data.gestionno + '\' , \'' + data.rue + '\' , \'' + data.ville + '\' , \'' + data.province + '\' , \'' +
      data.codepostal + '\' , \'' + data.numtelephone + '\' , \'' + data.numtelecopier + '\' );', (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Safely Added');
        res.send({result: 'SUCCESS'});
      }
    });
  }
};

exports.createProprietaire = function(){
  return (req, res, next) => {
    const data = req.body;
    console.log(req.body);

    db.query('INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES (\''
      + data.cliniqueno + '\' ,  \'' + data.propno + '\' , \'' + data.nom + '\' , \'' + data.numtelephone + '\' , \'' +
      data.addresse + '\' );', (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Safely Added');
        res.send({result: 'SUCCESS'});
      }
    });
  }
}

exports.createPersonnel = function() {
  return (req, res, next) => {
    const data = req.body;
    console.log(req.body);

    db.query('INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, ' +
      'numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES (' +
      '\'' + data.personnelno + '\' , \'' + data.cliniqueno + '\' , \'' +
      data.prenom + '\' , \'' + data.nomdefamille + '\' , \'' + data.adresse + '\' , \'' + data.numtelephone + '\' , DATE \'' +
      data.datedenaissance + '\' , \'' + data.nas + '\' , \'' + data.sexe + '\' , \'' + data.fonction + '\' ,\'' + data.salaire + '\' );',
      (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Safely Added');
          res.send({result: 'SUCCESS'});
        }
      });
  };
}

exports.createAnimal = function(){
  return (req, res, next) => {
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
  };
};

exports.updateAnimal = function() {
  return (req, res, next) => {
    const data = req.body;
    console.log(req.body);

    db.query('UPDATE vetosansfrontieresdb.animal ' +
      ' SET cliniqueno=\'' + data.cliniqueno + '\', animalno=\'' + data.animalno + '\', propno=\'' + data.propno
      + '\', nom=\'' + data.nom + '\', atype=\'' + data.atype + '\', description=\'' + data.description + '\', ' +
      'datedenaissance=\'' + data.datedenaissance + '\', dateinscription=\'' + data.dateinscription + '\', etat=\'' + data.etat + '\'\n' +
      ' WHERE animalno = \'' + data.animalno + '\' AND cliniqueno = \'' + data.cliniqueno + '\';', (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Safely Updated');
        res.send({result: 'SUCCESS'});
      }
    });
  };
}

exports.R1 = function() {
  return (req, res, next) => {
    return db.query('SELECT cliniqueno, cliniquenom, rue, ville, province, codepostal, gestionNo ' +
      'FROM VETOSANSFRONTIERESDB.Clinique ORDER BY cliniqueno;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R2 = function() {
  return (req, res, next) => {
    return db.query('SELECT DISTINCT nom FROM VETOSANSFRONTIERESDB.Animal;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R3 =  function() {
  return (req, res, next) => {
    return db.query('SELECT P.propno, P.nom, A.* FROM VETOSANSFRONTIERESDB.Proprietaire AS P, ' +
      'VETOSANSFRONTIERESDB.Animal AS A WHERE P.propno = A.propno AND A.cliniqueno =\'C1\';', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R4 =  function() {
  return (req, res, next) => {
    return db.query('SELECT * FROM VETOSANSFRONTIERESDB.Examen WHERE animalno=\'A1\';', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R5 =  function() {
  return (req, res, next) => {
    return db.query('SELECT TR.* FROM VETOSANSFRONTIERESDB.Traitementexamen AS TE, VETOSANSFRONTIERESDB.traitement AS TR' +
      ' WHERE TE.traitementno = TR.traitementno AND TE.examenno = \'E1\';', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R6 =  function() {
  return (req, res, next) => {
    return db.query('SELECT P.cliniqueno, SUM(salaire) AS SalaireTotal FROM VETOSANSFRONTIERESDB.Personnel AS P GROUP BY' +
      ' P.cliniqueno ORDER BY P.cliniqueno ;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R7 =  function() {
  return (req, res, next) => {
    return db.query('SELECT An.cliniqueno, COUNT(animalno) AS NOMBRE_ANIMAUX FROM VETOSANSFRONTIERESDB.Animal AS An WHERE ' +
      'An.atype=\'chat\' GROUP BY An.cliniqueno;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}

exports.R8 =  function() {
  return (req, res, next) => {
    return db.query('SELECT MIN(cout) AS minCout, MAX(cout) AS maxCout, AVG(cout) AS avgCout FROM VETOSANSFRONTIERESDB.Traitement;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R9 =  function() {
  return (req, res, next) => {
    return db.query('SELECT prenom, nomdefamille FROM VETOSANSFRONTIERESDB.Personnel WHERE' +
      ' (extract(year from current_date ) - extract(year from datedenaissance)) >= 50 ORDER BY nomdefamille;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R10 = function() {
  return (req, res, next) => {
      return db.query('SELECT * FROM VETOSANSFRONTIERESDB.proprietaire WHERE nom LIKE \'%blay%\';', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send({result: 'SUCCESS', data: data.rows});
        }
      });
    };
  }
exports.R11 =  function() {
  return (req, res, next) => {
    return db.query('DELETE FROM VETOSANSFRONTIERESDB.Personnel WHERE fonction=\'veterinaire\' AND prenom = \'Jean\' ' +
      'AND nomdefamille = \'Tremblay\' ;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
exports.R12 =  function() {
  return (req, res, next) => {
    return db.query('SELECT DISTINCT RST.nom FROM (SELECT PR.nom, AN.atype FROM VETOSANSFRONTIERESDB.Proprietaire AS PR, ' +
      'VETOSANSFRONTIERESDB.Animal AS AN \n' +
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
      '\t\tWHERE (z.nom = RST.nom) AND (z.atype = y.atype) ));;', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}

exports.R13 =  function() {
  return (req, res, next) => {
    return db.query('SELECT DISTINCT PR.nom FROM VETOSANSFRONTIERESDB.Proprietaire AS PR, VETOSANSFRONTIERESDB.Animal AS AN \n' +
      '                     WHERE PR.propno = AN.propno AND AN.atype = \'chat\' OR AN.atype =\'chien\';', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}

exports.R15 =  function() {
  return (req, res, next) => {
    return db.query('SELECT AN.*, TC.traitementno FROM VETOSANSFRONTIERESDB.TraitementClinique AS TC RIGHT OUTER JOIN ' +
      'VETOSANSFRONTIERESDB.Animal AS AN ON TC.cliniqueno = AN.cliniqueno AND AN.cliniqueno = \'C1\';', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({result: 'SUCCESS', data: data.rows});
      }
    });
  };
}
