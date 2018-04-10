import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../database/database.service";

@Component({
  selector: 'app-proprietaire-form',
  templateUrl: './proprietaire-form.component.html',
  styleUrls: ['./proprietaire-form.component.css']
})
export class ProprietaireFormComponent implements OnInit {
  prop = {
    cliniqueno: '',
    propno: ''
  };
  cliniqueInfo = [];
  action = 'Créer un propriétaire';
  constructor(private data: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.data.getAll('clinique').then(
      (res) => {
        this.cliniqueInfo = res.data;
        this.prop.cliniqueno = this.cliniqueInfo[0].cliniqueno;
      }
    );
  }

  calcPropNo() {
    this.data.getSome('clinique/proprietaire', this.prop.cliniqueno).then(
      (res) => {
        if (res.data.length === 0) {
          this.prop.propno = 'PR1';
        } else {
          const num = (res.data[res.data.length - 1].propno).split('PR');
          console.log(num);
          console.log(parseInt(num[1], 10) + 1);
          this.prop.propno = 'PR' + (parseInt(num[1], 10) + 1) ;
        }
      }
    );
  }

  complete() {
    this.data.create('proprietaire', this.prop)
      .then((result) => {
        if (result.result === 'SUCCESS') {
          this.router.navigate(['./proprietaire']);
        }
      });
  }
}
