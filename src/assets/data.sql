SET search_path = vetosansfrontieresDB;



-- INSERT IN Personnel  START--


INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P1','C1','Danny','Ahmed','250, rue Laval, Quebec, H7B 1G5','2807811100', DATE'1950-04-15', '123556789', 'M', 'gestionnaire', '30000');

INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P4','C1','Dan','Henry','450, rue Laval, Quebec, H7A 1A5','3107811100', DATE'1960-04-04', '123456789', 'M', 'personnel entretien', '10000');

INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P5','C1','Dannielle','Atwood','28, rue Laval, Quebec, J7A 3B5','3107811300', DATE'1980-03-04', '123656789', 'F', 'infirmiere', '20000');


INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P6','C1','Jean','Tremblay','30, rue Marchand, Quebec, Z7A 1A5','2806811100', DATE'1990-04-16', '123756789', 'M', 'veterinaire', '28000');


INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P7','C1','Fred','Richard','20, rue Antionne, Quebec, T6A 1A5','3697811100', DATE'1958-01-27', '128456789', 'M', 'personnel entretien', '10000');




INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P2','C2','Jean','Tang','220, Boulevard de la Concorde, Quebec, H6B 1J5','2407811100', DATE'1950-06-16', '923556789', 'M', 'gestionnaire', '30000');

INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P8','C2','Jean-Marie','Wang','110, Boulevard de la Concorde, Quebec, I2B 1J5','2407811100', DATE'1960-02-11', '823556789', 'M', 'personnel entretien', '10000');

INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P9','C2','Jeannette','Watson','110, rue Colombe, Quebec, J2B 8J5','4907811100', DATE'1990-02-11', '933556789', 'F', 'veterinaire', '28000');

INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P10','C2','Jane','Atson','60, rue Colombe, Quebec, K6Y 9G5','5807811100', DATE'1980-06-13', '861556789', 'F', 'infirmiere', '20000');

INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P11','C2','Antionne','Laroche','24, Boulevard de la Concorde, Quebec, OK5 1J5','2408621100', DATE'1958-05-11', '946556789', 'M', 'personnel entretien', '10000');




INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P3','C3','Pierre','Taji','550, Boulevard Dagenais, Quebec, O6B 1P5','2647811100', DATE'1950-12-09', '923558989', 'M', 'gestionnaire', '30000');


INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P12','C3','Jean-Pierre','Aji','67, Boulevard Dagenais, Quebec, T5B 1P5','3877811200', DATE'1980-11-09', '923668989', 'M', 'personnel entretien', '10000');


INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P13','C3','Robert','Lebois','67, Boulevard Ducharme, Quebec, Y2B 7T5','3997811200', DATE'1992-01-09', '923668990', 'M', 'personnel entretien', '10000');


INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P14','C3','Sarah','Arrah','23, rue Masson, Quebec, M9B 8E5','5827811100', DATE'1970-09-26', '987556789', 'F', 'veterinaire', '28000');

INSERT INTO VETOSANSFRONTIERESDB.Personnel (personnelNo, cliniqueNo, prenom, nomDeFamille, adresse, numTelephone,dateDeNaissance, nas, sexe, fonction, salaire ) VALUES ('P15','C3','Samanta','Lee','33, rue Pierre, Quebec, Y8B 8I5','6907811100', DATE'1990-12-31', '987557689', 'F', 'infirmiere', '20000');

-- INSERT IN Personnel END--

-- INSERT IN Clinique  START--
INSERT INTO VETOSANSFRONTIERESDB.Clinique (cliniqueNo, cliniqueNom, gestionNo, rue, ville, province,codePostal, numTelephone, numTelecopieur ) VALUES ('C1','Clinique Laval','P1','Highway','Laval','Quebec','H7T 2P5','4507811100','4186433320');


INSERT INTO VETOSANSFRONTIERESDB.Clinique (cliniqueNo, cliniqueNom, gestionNo, rue, ville, province,codePostal, numTelephone, numTelecopieur ) VALUES ('C2','Clinique Duvernay','P2','Boulevard de la Concorde','Laval','Quebec','H7J 2C5','4507711100','4196433320');


INSERT INTO VETOSANSFRONTIERESDB.Clinique (cliniqueNo, cliniqueNom, gestionNo, rue, ville, province,codePostal, numTelephone, numTelecopieur ) VALUES ('C3','Clinique Fabreville','P3','Boulevard Dagenais','Laval','Quebec','H7P 1T5','4107811100','4086433320');

-- INSERT IN Clinique  END--


-- INSERT IN Proprietaire  START --

INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C1','PR1','David Richard', '8192087896' ,'250, rue Murielle, Quebec, Y2B 3G5');

INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C1','PR2','Dary Matanta','8192087895','22, rue Arthur, Quebec, Y2C 3G5');

INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C1','PR3','Bernard Francis','8192087894' ,'26, rue Renard, Quebec, I2B 2I9');



INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C2','PR4','Francois Emmanuel','8192087893' ,'36, rue Panier, Quebec, T3A 3G5');


INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C2','PR5','Francoise Tremblay','7192087896' ,'37, rue Banner, Quebec, U3B 3G5');


INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C2','PR6','Rachel Barrison','6192087896','299, rue Renard, Quebec, U3B 4Y5');



INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C3','PR7','Suzanne Connor','2192087896','369, rue Poteau, Quebec, O9A 4P5');


INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C3','PR8','Suzie Lee','1192087896','169, rue Laval, Quebec, O9A 8P5');


INSERT INTO VETOSANSFRONTIERESDB.Proprietaire (cliniqueNo, propNo, nom, numTelephone, adresse) VALUES ('C3','PR9','Naomie Tammar','3192087896','9, rue Poisson, Quebec, K9A 5P5');


-- INSERT IN Proprietaire  END --

-- INSERT IN Animal  START --


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C1','A1','PR1','Kity','chat','chat avec yeux bleu pesant 3 kg', DATE'2015-12-31', DATE'2018-03-01','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C1','A2','PR1','Tity','chat','chat avec yeux rouge pesant 2 kg',DATE'2016-06-12',DATE'2018-02-01','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C1','A3','PR2','Rocky','chien','chien avec yeux bleu pesant 3 kg',DATE'2015-11-01',DATE'2018-01-01','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C1','A4','PR3','Rex','chien','chien avec yeux rouge pesant 2 kg',DATE'2014-11-01',DATE'2018-01-12','vivant');



INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C2','A5','PR4','Becky','chat','chat avec yeux marron pesant 3.5 kg',DATE'2015-06-30',DATE'2018-03-01','vivant');

INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C2','A6','PR4','Bianca','chat','chat avec yeux noir pesant 2.5 kg',DATE'2015-04-30',DATE'2018-02-01','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C2','A7','PR5','Spike','chien','chien avec yeux noir pesant 4.5 kg',DATE'2015-04-30',DATE'2018-03-28','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C2','A8','PR6','Tango','chien','chien avec yeux marron pesant 1.5 kg',DATE'2018-01-31',DATE'2018-02-04','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C3','A9','PR7','Stan','chat','chat poilu avec yeux gris pesant 5.5 kg',DATE'2017-01-31',DATE'2018-01-04','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C3','A10','PR7','Felix','chien','chien non poilu avec yeux jaune pesant 3.5 kg',DATE'2017-02-28',DATE'2018-02-04','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C3','A11','PR8','Ruby','chien','chien non poilu avec yeux orange pesant 2.5 kg',DATE'2018-02-28',DATE'2018-03-16','vivant');


INSERT INTO VETOSANSFRONTIERESDB.Animal (cliniqueNo, animalNo, propNo, nom, Atype ,description, dateDeNaissance, dateInscription, etat) VALUES ('C3','A12','PR9','Youka','chat','chien non poilu avec yeux orange pesant 1.5 kg',DATE'2018-01-28',DATE'2018-02-16','vivant');

-- INSERT IN Animal  END --

-- INSERT IN Traitement  START --

INSERT INTO VETOSANSFRONTIERESDB.Traitement (traitementNo, description, cout) VALUES ('T1','Traitement a la Penicilline','50.00');
INSERT INTO VETOSANSFRONTIERESDB.Traitement (traitementNo, description, cout) VALUES ('T2','Vaccination contre la grippe','70.00');
INSERT INTO VETOSANSFRONTIERESDB.Traitement (traitementNo, description, cout) VALUES ('T3','Traitement a la Cortisone','80.00');

-- INSERT IN Traitement  END --

-- INSERT IN TraitementClinique  START --

INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C1','T1');
INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C1','T2');
INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C1','T3');

INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C2','T1');
INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C2','T2');
INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C2','T3');

INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C3','T1');
INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C3','T2');
INSERT INTO VETOSANSFRONTIERESDB.TraitementClinique (cliniqueNo, traitementNo) VALUES ('C3','T3');

-- INSERT IN TraitementClinique  END --

-- INSERT IN Examen  START --

INSERT INTO VETOSANSFRONTIERESDB.Examen(examenNo, cliniqueNo, animalNo, personnelNo, dateE, heure, description) VALUES ('E1','C1','A1','P6', DATE'2018-03-01','11:00:00','Traitement a la Penicilline');
INSERT INTO VETOSANSFRONTIERESDB.Examen(examenNo, cliniqueNo, animalNo, personnelNo, dateE, heure, description) VALUES ('E2','C2','A5','P9', DATE'2018-01-04','16:40:00','Traitement a la Penicilline');
INSERT INTO VETOSANSFRONTIERESDB.Examen(examenNo, cliniqueNo, animalNo, personnelNo, dateE, heure, description) VALUES ('E3','C3','A9','P14',DATE'2018-01-04','12:36:00','Vaccination Contre la grippe');

-- INSERT IN Examen  END --

-- INSERT IN TraitementExamen  START --

INSERT INTO VETOSANSFRONTIERESDB.TraitementExamen(examenNo, traitementNo, quantite,dateCommence, dateFini) VALUES ('E1','T1', 1,DATE'2018-03-01', DATE'2018-03-01');
INSERT INTO VETOSANSFRONTIERESDB.TraitementExamen(examenNo, traitementNo, quantite,dateCommence, dateFini) VALUES ('E2','T1', 1,DATE'2018-01-04', DATE'2018-01-05');
INSERT INTO VETOSANSFRONTIERESDB.TraitementExamen(examenNo, traitementNo, quantite, dateCommence, dateFini) VALUES ('E3','T1',1,DATE'2018-01-04', DATE'2018-01-04');

-- INSERT IN TraitementExamen  END --
