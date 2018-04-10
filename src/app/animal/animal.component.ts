import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  displayedAnimalColumns = ['animalno', 'propno', 'nom', 'atype', 'description', 'datedenaissance', 'dateinscription',
    'etat', 'cliniqueno'];
  animalSource: any;

  animalTitles = {
    'animalno': 'No.', 'nom': 'Nom', 'atype': 'Type', 'description': 'Description', 'datedenaissance': 'Date de naissance',
    'dateinscription': 'Date d\'inscription', 'etat': 'État', 'propno': 'No. Prop'
  };

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.animalSource.filter = filterValue;
  }

  constructor(private data: DatabaseService, private router: Router) {
    data.getAll('animal').then(
      (res) => {
        console.log(res);
        // Retouner le nom du propriétaire aussi
        this.animalSource = new MatTableDataSource(res.data);
      }
    );
  }

  delete(id: string, clinID: string) {
    this.data.delete('animal', id + '/' + clinID).then(
      (ans) => {
        if (ans.result !== 'SUCCESS') {
          console.log('Oops un examen utilise cette tuple!');
        }
      }
    ).then(
      () => {
        this.data.getAll('animal').then(
          (res) => {
            console.log(res);
            // Retouner le nom du propriétaire aussi
            this.animalSource = new MatTableDataSource(res.data);
          }
        );
      }
    );
  }

  ngOnInit() {

  }

}
