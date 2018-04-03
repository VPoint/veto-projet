import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DatabaseService} from '../database/database.service';

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.component.html',
  styleUrls: ['./clinique.component.css']
})
export class CliniqueComponent implements OnInit {
  displayedCliniqueColumns = ['propno', 'nom', 'numtelephone', 'adresse', 'cliniqueno'];
  cliniqueInfo = [];
  cliniqueSource: any;
  selectedClinique: any;

  animalTitles = {
    'animalno': 'No.', 'nom': 'Nom', 'atype': 'Type', 'description': 'Description', 'datedenaissance': 'Date de naissance',
    'dateinscription': 'Date d\'inscription', 'etat': 'État'
  };

  propTitles = {
    'propno': 'No.', 'nom': 'Nom', 'numtelephone': 'Numéro de téléphone', 'adresse': 'Adresse'
  };

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.cliniqueSource.filter = filterValue;
  }

  constructor(private data: DatabaseService) {
    data.getAll('clinique').then(
      (res) => {
        this.cliniqueInfo = res.data;
        this.selectedClinique = this.cliniqueInfo[0].cliniqueno;
      }
    );
  }

  delete(id: string) {
    this.data.delete('clinique', id);
  }

  ngOnInit() {
  }

  print(text: any) {
    console.log(text);
  }
}
