import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-clinique-form',
  templateUrl: './clinique-form.component.html',
  styleUrls: ['./clinique-form.component.css']
})
export class CliniqueFormComponent implements OnInit {
  clinique: any = {};
  gestInfo: any = {};
  action = 'Créer une clinique';

  constructor(private data: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.data.getAll('clinique').then(
      (res) => {
        if (res.data.length === 0) {
          this.clinique.cliniqueno = 'C1';
        } else {
          const num = (res.data[res.data.length - 1].cliniqueno).split('C');
          this.clinique.cliniqueno = 'C' + (parseInt(num[1], 10) + 1);
        }
      }
    );
  }

  getGest(data) {
    this.gestInfo = data;
  }

  complete() {
    this.gestInfo.cliniqueno = this.clinique.cliniqueno;
    this.gestInfo.fonction = 'gestionnaire';
    this.data.create('personnel', this.gestInfo).then(
      () => {
        this.clinique.gestionno = this.gestInfo.personnelno;
        this.data.create('clinique', this.clinique)
          .then((result) => {
            if (result.result === 'SUCCESS') {
              this.router.navigate(['./clinique']);
            }
          });
      }
    );
  }
}
