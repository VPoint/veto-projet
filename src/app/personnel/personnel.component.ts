import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  displayedColumns = ['personnelNo', 'prenom', 'nomDeFamille',
    'adresse', 'numTelephone', 'fonction', 'salaire'];
  dataSource = new MatTableDataSource(PERSONNEL_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() {
  }

  ngOnInit() {
  }
}

export interface Personnel {
  personnelNo: string;
  prenom: string;
  nomDeFamille: string;
  adresse: string;
  numTelephone: string;
  dateDeNaissance: string;
  sexe: string;
  NAS: string;
  fonction: string;
  salaire: number;
  cliniqueNo: string;
}

const PERSONNEL_DATA: Personnel[] = [
  {
    personnelNo: 'P098',
    prenom: 'John',
    nomDeFamille: 'Doe',
    adresse: 'H',
    numTelephone: '321-564-8465',
    dateDeNaissance: '12/32/21',
    sexe: 'F',
    NAS: '123123',
    fonction: 'vertinaire',
    salaire: 100,
    cliniqueNo: '09876'
  },
  {
    personnelNo: '45654',
    prenom: 'Hydrogen',
    nomDeFamille: 'Oxygen',
    adresse: '234 jhdskff hjksdh',
    numTelephone: '234-234-2344',
    dateDeNaissance: '2/5/5',
    sexe: 'V',
    NAS: '0982389',
    fonction: 'nettoyage',
    salaire: 80,
    cliniqueNo: '546'
  },
  {
    personnelNo: '456',
    prenom: 'Hydrogen',
    nomDeFamille: 'dsfgdfgd',
    adresse: 'H',
    numTelephone: '5435-34-53-45',
    dateDeNaissance: '345',
    sexe: 'M',
    NAS: '345345',
    fonction: '344355',
    salaire: 0,
    cliniqueNo: '345345'
  },
  {
    personnelNo: '345345',
    prenom: 'Hyd345rog335445e345n',
    nomDeFamille: '888',
    adresse: 'H',
    numTelephone: '0978',
    dateDeNaissance: '2dfsdf',
    sexe: 'F',
    NAS: 'sdf',
    fonction: 'sdfsdgjyt',
    salaire: 0,
    cliniqueNo: '365784'
  }
];
