import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.css']
})
export class PersonnelFormComponent implements OnInit {
  @Input() embedded: boolean;
  @Output() changeevent: EventEmitter<any> = new EventEmitter<any>();
  personnel = {
    cliniqueno: '',
    personnelno : ''
  };
  cliniqueInfo = [];
  action = 'Créer un employé';
  limit = new Date(Date.now());

  constructor(private data: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.data.getAll('personnel').then(
      (res) => {
        if (res.data.length === 0) {
          this.personnel.personnelno = 'P1';
        } else {
          const num = (res.data[res.data.length - 1].personnelno).split('P');
          console.log(num);
          console.log(parseInt(num[1], 10) + 1);
          this.personnel.personnelno = 'P' + (parseInt(num[1], 10) + 1) ;
        }

      }
    );
    this.data.getAll('clinique').then(
      (res) => {
        this.cliniqueInfo = res.data;
        this.personnel.cliniqueno = this.cliniqueInfo[0].cliniqueno;
      }
    );
  }

  sendEvent() {
    this.changeevent.next(this.personnel);
  }

  complete() {
    this.data.create('personnel', this.personnel)
      .then((result) => {
        if (result.result === 'SUCCESS') {
          this.router.navigate(['./personnel']);
        }
      });
  }
}
