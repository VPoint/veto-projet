import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database/database.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  cliniqueInfo: any[] = [];
  selectedClinique: any;
  action: string = 'Créer animal';
  animal: any = {
    animalno: '',
    cliniqueno: ''
  };
  propInfo: any[] = [];
  isEditMode: boolean = false;
  limit: any = new Date(Date.now());

  constructor(private data: DatabaseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.data.getAll('clinique').then(
      (res) => {
        this.cliniqueInfo = res.data;
        this.selectedClinique = this.cliniqueInfo[0].cliniqueno;
      }
    );

    this.data.getSome('animal', this.route.snapshot.paramMap.get('id') + '/' + this.route.snapshot.paramMap.get('cliniqueid'))
      .then((data) => {
        if (data.result === 'SUCCESS' && data.data[0]) {
          this.animal = data.data[0];
          this.isEditMode = true;
          this.action = 'Modifier animal';
          this.selectedClinique = this.animal.cliniqueno;
          this.getOwner();
          console.log(data);
        }
      });
  }

  getOwner() {
    this.data.getSome('clinique/proprietaire', this.selectedClinique).then(
      (res) => {
        this.propInfo = res.data;
        if(this.propInfo[0]) {
          this.animal.propno = this.propInfo[0].propno;
        }
      }
    );
  }

  editAnimal() {
    if (this.isEditMode) {
      this.data.update('animal', this.route.snapshot.paramMap.get('id'), this.animal)
        .then((data) => {
          if (data.result === 'SUCCESS') {
            this.router.navigate(['./animal/' + this.animal.cliniqueno + '/' +  this.animal.animalno]);
          }
        });
    } else {
      console.log(this.animal);
      this.data.getSome('clinique/animal', this.selectedClinique).then(
        (res) => {
          if (res.data.length === 0) {
            this.animal.animalno = 'A1';
          } else {
            const num = (res.data[res.data.length - 1].animalno).split('A');
            if (num === '') {
              this.animal.animalno = 'A1';
            } else {
              this.animal.animalno = 'A' + (parseInt(num[1], 10) + 1);
            }
          }
        }
      ).then(
        () => {
          this.data.create('animal', this.animal)
            .then((data) => {
              if (data.result === 'SUCCESS') {
                this.router.navigate(['./animal/' + this.animal.cliniqueno  + '/' + this.animal.animalno]);
              }
            });
        }
      );

    }
  }
}
