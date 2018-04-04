import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DatabaseService} from '../database/database.service';

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.component.html',
  styleUrls: ['./clinique.component.css']
})
export class CliniqueComponent implements OnInit {
  displayedCliniqueColumns = ['cliniqueno', 'cliniquenom', 'codepostal', 'rue', 'ville', 'province'];
  cliniqueSource: any;

  cliniqueTitles = {
    'cliniqueno': 'No.', 'cliniquenom': 'Nom', 'codepostal': 'Code postale', 'province': 'Province',
    'rue': 'Rue', 'ville': 'Ville'
  };

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.cliniqueSource.filter = filterValue;
  }

  constructor(private data: DatabaseService) {
    data.getAll('clinique').then(
      (res) => {
        this.cliniqueSource = new MatTableDataSource(res.data);
      }
    );
  }

  ngOnInit() {
  }
}
