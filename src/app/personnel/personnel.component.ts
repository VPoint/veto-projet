import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DatabaseService} from '../database/database.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  displayedColumns = ['personnelno', 'prenom', 'nomdefamille', 'adresse', 'numtelephone', 'datedenaissance', 'nas', 'sexe', 'fonction', 'salaire'];
  dataSource = new MatTableDataSource();

  titles = {
    'personnelno': 'No.', 'prenom': 'Prénom', 'nomdefamille': 'Nom de Famille', 'adresse': 'Adresse', 'numtelephone': 'Numéro de téléphone',
    'datedenaissance': 'Date de Naissance', 'nas': 'NAS', 'sexe': 'Sexe', 'fonction': 'Fonction', 'salaire': 'Salaire'
  };

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private data: DatabaseService) {
    data.getAll('personnel').then(
      (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
      }
    );
  }

  ngOnInit() {
  }
}
