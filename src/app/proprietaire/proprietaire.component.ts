import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../database/database.service";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent implements OnInit {
  displayedPropColumns = ['propno', 'nom', 'numtelephone', 'adresse', 'cliniqueno'];
  propSource: any;
  propTitles = {
    'propno': 'No.', 'nom': 'Nom', 'numtelephone': 'Numéro de téléphone', 'adresse': 'Adresse'
  };

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.propSource.filter = filterValue;
  }

  constructor(private data: DatabaseService) {
    data.getAll('proprietaire').then(
      (res) => {
        console.log(res);
        this.propSource = new MatTableDataSource(res.data);
      }
    );
  }

  delete(id: string) {
    this.data.delete('proprietiare', id);

    //mettre à jour les données
  }

  ngOnInit() {
  }

  print(text: any) {
    console.log(text);
  }
}
